const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

module.exports = {
  router: express.Router(),
  app: app
}
