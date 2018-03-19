module.exports = function( cors ) {

  var express = require('express');
  var router = express.Router();

  // Simple example of a CORS-enabled POST.
  router.post('/testCorsPost', cors(), function (req, res, next) {
    console.log("Bang!");
    res.json({msg: 'Hello from server! This is a response from a CORS-enabled POST.'})
  })
    
  return  router;
}
