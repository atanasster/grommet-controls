const fs = require('fs');
const path = require('path');

module.exports.default = async function(source) {
  const parsed = path.parse(this.resourcePath);
  const docFile = path.join(parsed.dir, 'doc',parsed.name + '.json');
  let newSource = source;
  if (fs.existsSync(docFile)) {
    const doc = await require(docFile);
    if (Array.isArray(doc) && doc.length > 0) {
      const j = JSON.stringify(doc[0]);
      newSource = newSource + `
    ${parsed.name}.__docgenInfo = ${j};
    `;
    }
  }
  return newSource;
}

