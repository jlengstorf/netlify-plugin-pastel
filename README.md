# netlify-plugin-pastel

A Netlify build plugin to add in-place commenting (via [Pastel][pastel]) to
Netlify deploy previews.

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

[pastel]: https://usepastel.com/
