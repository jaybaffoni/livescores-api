var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://www.nfl.com/liveupdate/scores/scores.json')
  .then((response) => {
    return res.send(response.data);
  })
  .catch((error) => {
    console.log(error)
  })
});

module.exports = router;
