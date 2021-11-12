 var express = require('express');
var router = express.Router();

var monk = require('monk');

var db = monk('localhost:27017/vidzy');
var collection = db.get('videos')

// api/videos
router.get('/', function(req, res) {
  
  collection.find({},function(err,videos){

    if(err) throw err;
    res.json(videos);
  });
  //res.render('index', { title: 'Express' });
});

//api/videos/id

router.get('/:id1', function(req, res) {
  
  collection.findOne({ _id: req.params.id1 },
     function(err,video){

    if(err) throw err;
    res.json(video);
  });
  //res.render('index', { title: 'Express' });
});


//INSERT A NEW VIDEO

router.post('/', function(req, res) {
  
  collection.insert({
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.desc


  },function(err,video){

    if(err) throw err;
    //if insert is successful, return new object
    res.json(video);
  });
  //res.render('index', { title: 'Express' });
});


//update on existing video

router.put ('/:id', function(req, res) {
  
  collection.update({ _id: req.params.id },

  { $set: {
    title: req.body.title,
    genre: req.body.genre,
    description: req.body.desc


  } } ,function(err,video){

    if(err) throw err;
    //if update is successful, return updated video object
    res.json(video);
  });

  });
router.get('/:id', function(req, res) {
  
  collection.findOne({ _id: req.params.id1 },
     function(err,video){

    if(err) throw err;
    res.json(video);
  });
  
});

  



module.exports = router;


