'use strict';

const path = require('path');
const merapi = require('merapi');
const yaml = require('js-yaml');
const fs = require('fs');

// Load our `service.yml` file which contains our service metadata.
const config = yaml.safeLoad(fs.readFileSync('./service.yml', 'utf8'));
config.package = require('./package.json');

module.exports = merapi({
  basepath: path.resolve(__dirname, 'lib'),
  config: config,
  delimiters: { left: '${', right: '}' }
});
