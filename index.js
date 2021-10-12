const core = require('@actions/core');

const setup = require('./src/setup-terrascan');

(async () => {
  try {
    await setup();
  } catch (error) {
    core.setFailed(error.message);
  }
})();
