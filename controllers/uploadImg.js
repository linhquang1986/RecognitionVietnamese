
"use strict"
var Vision = require('../middleware').vision;

exports.upload_img = (req, res) => {
  let fileName = req.file.originalname;
  let imgUri = './public/images/' + fileName;
  let img = new Img({
    name: fileName,
    url: imgUri
  });
  let vision = new Vision(imgUri);
  vision.labelDetection().then(rs => {
    res.json(rs)
  })
}