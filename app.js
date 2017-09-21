const express = require('express');

var app = express();

app.use(function (req,res,next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

var words  = [
  {"word":"plyhistor","desc":"a person of great and varied learning."},
  {"word":"oceanicity","desc":"the degree to which the climate of a place is influenced by the sea."},
  {"word":"birthdom","desc":"the land of ones birth or ones inheritance."}
];

app.use(express.static("./public"));

app.get('/request',function (req,res) {
  res.json(words);
});

app.listen(3000);

console.log("express app running on port 3000");
