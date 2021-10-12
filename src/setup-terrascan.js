const os = require('os');
const path = require('path');

const core = require('@actions/core');
const tc = require('@actions/tool-cache');

async function downloadCLI(url) {
  core.debug(`Downloading terrascan CLI from ${url}`);
  const pathToCLITar = await tc.downloadTool(url);

  core.debug('Extracting terrascan CLI zip file');
  const pathToCLI = await tc.extractTar(pathToCLITar);
  core.debug(`terrascan CLI path is ${pathToCLI}.`);

  if (!pathToCLITar || !pathToCLI) {
    throw new Error(`Unable to download terrascan from ${url}`);
  }

  return pathToCLI;
}

async function run() {
  try {
    const inputVersion = core.getInput('tfscan_version');

    core.debug(`Getting download URL for terrascan version ${inputVersion}`);
    const url = `https://github.com/accurics/terrascan/releases/download/v${inputVersion}/terrascan_${inputVersion}_Linux_x86_64.tar.gz`;

    const pathToCLI = await downloadCLI(url);

    core.addPath(pathToCLI);

    // const matchersPath = path.join(__dirname, '..', '.github');
    // core.info(`##[add-matcher]${path.join(matchersPath, 'matchers.json')}`);

    return inputVersion;
  } catch (ex) {
    core.error(ex);
    throw ex;
  }
}

module.exports = run;
