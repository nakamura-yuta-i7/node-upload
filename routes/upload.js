var express = require('express');
var router = express.Router();
var fs = require('fs');

router.post('/', function(req, res, next) {
  console.log(req);
  console.log(req.files);

  var target_path, tmp_path;
  tmp_path = req.files.upload_files.path;

  return;
  target_path = './uploads/' + req.files.upload_files.originalname;
  fs.rename(tmp_path, target_path, function(err) {
    if (err) {
      throw err;
    }
    fs.unlink(tmp_path, function() {
      if (err) {
        throw err;
      }
      res.send('File uploaded to: ' + target_path + ' - ' + req.files.upload_files.size + ' bytes');
    });
  });
});

module.exports = router;
