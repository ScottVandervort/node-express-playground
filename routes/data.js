module.exports = function( cors ) {

  var express = require('express');
  var router = express.Router();

  var sampleData = [{ "studio" : "Disney", "character" : "Mickey Mouse"},
                    { "studio" : "Disney", "character" : "Donald Duck"},
                    { "studio" : "Disney", "character" : "Goofy"},
                    { "studio" : "Pixar", "character" : "Woody"},
                    { "studio" : "Pixar", "character" : "Buzz Lightyear"}];


  // Simple example of a CORS-enabled POST.
  router.post('/test', cors(), function (req, res, next) {    
    res.json({msg: 'Hello from server! This is a response from a CORS-enabled POST.'})
  })

  // Simple example of a CORS-enabled GET.
  router.get('/test', cors(), function (req, res, next) {    
    res.json({msg: 'Hello from server! This is a response from a CORS-enabled GET.'})
  })  

  router.get('/characters', cors(), function (req, res, next) {    
    res.json(sampleData);
  })

    
  return  router;
}
