import del from 'del';
import fs from 'fs';
import path from 'path';

const components = folder => fs
  .readdirSync(folder)
  .filter(
    file => fs.statSync(path.join(folder, file)).isDirectory() &&
    fs.existsSync(path.join(folder, file, 'doc.js'))
  );

const generateDocs = (FOLDER) => {
  components(FOLDER).forEach((component) => {
    /* eslint-disable */
    const doc = require(path.join(FOLDER, component, 'doc.js')).default;
    /* eslint-enable */
    const destination = path.join(FOLDER, component, 'README.md');
    del(destination).then(() => fs.writeFileSync(destination, doc({}).toMarkdown()));
  });
};

generateDocs(path.resolve('src/js/components'));
generateDocs(path.resolve('src/js/chartjs'));

