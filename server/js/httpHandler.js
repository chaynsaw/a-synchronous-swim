const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

var commands = ['up', 'down', 'left', 'right'];
var randomNum = () => Math.floor(Math.random() * 3);

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  console.log('router called');
  res.writeHead(200, headers);
  res.write(commands[randomNum()]); // writes data onto req object that is returned
  res.end();
};

/*
return an object of string that the client can use to make a swim command
goes into res.end('here')
*/