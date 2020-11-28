var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addform', function (req, res, next) {
  console.log(req.body)
  var reqs = req.body
  var obj = {
    studentid: reqs.studentid,
    studentname: reqs.studentname,
    studentcountry: reqs.studentcountry,
    studentstate: reqs.studentstate,
    studentdistrict: reqs.studentdistrict,
    studentmandal: reqs.studentmandal,
    studentvillage: reqs.studentvillage,
    studentdob: reqs.studentdob,
  }
  mongoose.model('data').create(obj, function (err, dataObj) {
    if (err) {
      console.log(err)
    } else {
      console.log(dataObj)
      res.json(dataObj)
    }
  })
});

router.get('/getdata', function (req, res, next) {
  try {
    mongoose.model('data').find({}, function (err, dataObj) {
      if (err) {
        console.log(err);
      } else {
        console.log(dataObj)
        res.json(dataObj);

      }
    });
  } catch (e) {
    console.log();
  }
});

router.post('/updatedata/:dataId', function (req, res, next) {
  console.log(req.params.dataId)
  var dataId = req.params.dataId
  var reqs = req.body
  console.log(req.body)
  mongoose.model('data').findByIdAndUpdate({ _id: dataId }, {
    $set: {
      studentid: reqs.studentid,
      studentname: reqs.studentname,
      studentcountry: reqs.studentcountry,
      studentstate: reqs.studentstate,
      studentdistrict: reqs.studentdistrict,
      studentmandal: reqs.studentmandal,
      studentvillage: reqs.studentvillage,
      studentdob: reqs.studentdob,
      modified_date: new Date,
    }
  }, function (err,dataObj) {
    if (err) {
      console.log(err)
    } else {
      res.json(dataObj)
    }
  })

})

router.get('/deletedata/:dataId', function (req,res,next) {
  console.log(req.params.dataId)
  mongoose.model('data').remove({_id:req.params.dataId}, function (err,data) {
    if (err) {
      console.log(err)
    }
    else {
        res.json('delete successfully')
    }
  })
})

module.exports = router;
