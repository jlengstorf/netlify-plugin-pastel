const glob = require('glob');
const { injectScript } = require('./inject-script');

module.exports = {
  // Name of the Netlify Build plugin. Should match the package name on npm.
  name: 'netlify-plugin-pastel',
  async onPostBuild({ constants: { BUILD_DIR } }) {
    // bail immediately if this isn’t a deploy preview
    if (process.env.CONTEXT !== 'deploy-preview') return;

    // find all HTML files in the build directory
    const files = glob.sync(`${BUILD_DIR}/**/*.html`);

    // run all the file replacements in parallel...
    const promises = files.map(injectScript);

    // ...but wait for them all to finish before moving on
    await Promise.all(promises);

    // TODO how do we log this in a better way?
    console.log(
      `Added in-place commenting using Pastel to ${files.length} page${
        files.length === 1 ? '' : 's'
      }.`,
    );
  },
};
