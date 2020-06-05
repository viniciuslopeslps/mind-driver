import express = require('express');
import bodyParser = require('body-parser');
import { Authentication } from '../config/authentication';

const expressApp = express();
const Auth = new Authentication()

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({
  extended: true
}));
expressApp.use(Auth.initialize());

module.exports = {
  express: express,
  app: expressApp
}
