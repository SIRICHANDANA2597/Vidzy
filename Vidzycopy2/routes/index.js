var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/vidzy');
var collection = db.get("videos");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/videos');
});

router.get('/videos', function(req, res) {
  collection.find({},function(err,videos){
    if (err) throw err;
    res.render('index', { results : videos });
  });

});

  router.get('/videos/new', function(req, res, next) {
  res.render('new');
});
  
router.get('/videos/:id', function(req, res) {
  collection.findOne({_id:req.params.id},function(err,video ){
    if (err) throw err;
    res.render('show',{video:video});
  });

});
module.exports = router;

app.listen(3000,() => {

  console.log('sql-part listening on port 3000')
})
