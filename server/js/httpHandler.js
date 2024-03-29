const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueue = require('./messageQueue.js');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

var commands = ['up', 'down', 'left', 'right'];
var randomNum = () => Math.floor(Math.random() * 3);

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  console.log('router called');
  res.writeHead(200, headers);
  if (req.method === 'POST') {
    let file = req.file;
    // save file
  }
  if (req.method === 'GET') {
    res.write(messageQueue.dequeue()); // writes data onto req object that is returned
  }

  res.end();
};

/*
return an object of string that the client can use to make a swim command
goes into res.end('here')
*/

/*
distinguishing between different kinds of get requests
updating background image
.done() after returning get request and not running failure/ error callback

*/