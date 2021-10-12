# action-setup-terrascan

GitHub Action for install terrascan cli

## Inputs

### Required

`version` - default `latest`

# Example workflow

Never use `main` branch in your github workflows!

```yaml
name: Setup terrascan

on: pull_request

jobs:
  helm-suite:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2

    # - name: myOtherJob1
    #   run:

    - name: "Setup terrascan"
      uses: vcaldaralo/action-setup-terrascan@master
      with:
        version: "1.11.0"
```
