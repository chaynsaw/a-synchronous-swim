const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  console.log('router called');
  // if (req.type === 'GET') {
  //   res.end('up');
  // }
  res.writeHead(200, headers);
  res.end('up');
};

/*
return an object of string that the client can use to make a swim command
goes into res.end('here')
*/