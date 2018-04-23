'use strict';

require('dotenv').config();

const boot = require('./index');

try {
  boot.start();
} catch (e) {
  console.error(e.stack);
  process.exit();
}
