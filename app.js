const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function (req,res,next) {
  console.log(`${req.method} request for ${req.url} - ${JSON.stringify(req.body)}`);
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

app.post('/request',function (req,res) {
  req.body.word = req.body.word.trim();
  req.body.desc = req.body.desc.trim();
  words.push(req.body);
  res.json(words);
});

app.delete('/request/:term',function (req,res) {
  words = words.filter(function (definition) {
    return definition.word.toLowerCase() != req.params.term.toLowerCase();
  });
  res.json(words);
  console.log(words);
});

app.listen(3000);

console.log("express app running on port 3000");
