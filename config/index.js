const dotenv = require('dotenv');
const path = require('path');

const result = dotenv.config({
  path: path.join(__dirname, process.env.NODE_ENV ? process.env.NODE_ENV + '.env' : 'vars.env')
});

const debug = require('debug')('config');

if(result.error) {
  throw new Error('Missing vars.env');
} else {
  debug('loaded env:', result.parsed);
}

module.exports = require('./config.js');