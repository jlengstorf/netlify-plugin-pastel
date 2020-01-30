const fs = require('fs');
const unified = require('unified');
const parse = require('rehype-parse');
const visit = require('unist-util-visit');
const h = require('hastscript');
const stringify = require('rehype-stringify');

const addScriptNode = () => tree => {
  visit(tree, 'element', node => {
    if (node.tagName === 'body') {
      node.children.push(
        h(
          'script',
          `(function(a){const b=a.createElement("script");b.src="https://code.pastelcanvases.com/snippets/netlify-integration.bundle.js?ts="+Date.now(),b.type="text/javascript",b.async=!0;const c=a.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)})(document);`,
        ),
      );
    }
  });
};

exports.injectScript = filePath =>
  new Promise(resolve => {
    const markup = unified()
      .use(parse)
      .use(addScriptNode)
      .use(stringify)
      .processSync(fs.readFileSync(filePath))
      .toString();

    fs.writeFileSync(filePath, markup);

    resolve(true);
  });
