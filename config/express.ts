const express = require('express');
const bodyParser = require('body-parser');

const expressApp = express();

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({
  extended: true
}));

module.exports = {
  router: express.Router(),
  app: expressApp
}
