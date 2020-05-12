const router = require('../config/express').router;
const contentService = require('../services/content-service');

router.get('/', function (req, res) {
  res.send('Birds home page');
});

router.post('/', (req, res)=> {
  let content = req.body;
  contentService.createContent()
});

module.exports = router;