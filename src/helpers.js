const path = require('path');
const camelCase = require('lodash.camelcase');

module.exports = function (plop, options) {
    plop.addHelper('basePath', () => path.resolve(options.BASE_PATH));
  
    plop.addHelper('folder', (name, type) => options.SEPARATE_DIRECTORY ? type : camelCase(name));
    
    plop.addHelper('position', (name) => options.SEPARATE_DIRECTORY ? '../' + name : '.');
}