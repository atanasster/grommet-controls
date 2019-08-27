const del = require('del');
const fs = require('fs');
const path = require('path');
const { parse } = require('react-docgen-typescript').withDefaultConfig({});

const components = folder => fs
  .readdirSync(folder)
  .filter(
    file => fs.statSync(path.join(folder, file)).isDirectory()
  );

const generateDocs = (FOLDER) => {
  components(FOLDER).forEach((component) => {
    /* eslint-disable */
    const doc = path.join(FOLDER, component, component + '.tsx');
    /* eslint-enable */
    const destinationPath = path.join(FOLDER, component, 'doc');
    const destination = path.join(destinationPath, `${component}.json`);
    const parsed = parse(doc);
    if (!fs.existsSync(destinationPath)) {
      fs.mkdirSync(destinationPath);
    }
    del(destination)
      .then(() => {
        if (parsed && Array.isArray(parsed) && parsed.length > 0) {
          fs.writeFileSync(destination, JSON.stringify(parsed));
        }
      });
  });
};

generateDocs(path.resolve('src/components'));
generateDocs(path.resolve('src/chartjs'));
