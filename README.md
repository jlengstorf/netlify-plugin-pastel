<img src="static/logo.png" width="400"/><br>

[![Netlify Status](https://api.netlify.com/api/v1/badges/{{siteId}}/deploy-status)](https://app.netlify.com/sites/{{username}}/deploys)

Netlify Build plugin pastel - A Netlify build plugin to add in-place commenting (via Pastel) to Netlify deploy previews..

# Install

```
npm install netlify-plugin-pastel
```

# Usage

Add this plugin to the `plugins` array in your
[`netlify.yml` configuration file](https://docs.netlify.com/configure-builds/file-based-configuration):

```yml
plugins:
  - package: netlify-plugin-pastel
    config: {}
```

# Configuration

The following `config` options are available:

## foo

_Type_: `string`\
_Default_: `bar`

Example description of the `foo` option.
