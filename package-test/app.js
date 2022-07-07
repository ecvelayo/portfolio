const http = require('http');
const moment = require('moment');
const {convert} = require('convert');
const hostname = '127.0.0.1';
const port = 3000;

getTime = () => {
  // const dateTime = new Date();
  // const hours = dateTime.getHours() > 9 ? dateTime.getHours() : '0'+dateTime.getHours();
  // const minutes = dateTime.getMinutes() > 9 ? dateTime.getMinutes() : '0'+dateTime.getMinutes();
  // const seconds = dateTime.getSeconds() > 9 ? dateTime.getSeconds() : '0'+dateTime.getSeconds();
  // return hours + ':' + minutes + ':' + seconds;
  return new Date().toLocaleTimeString();
}

generatePassword = (characterLength) => {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890)(*&^%$#@!_+-';
  for ( let i = 0; i < characterLength; i++){
    result += characters.charAt(Math.floor(Math.random()*characters.length));
  }
  return result;
}

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');


  res.end((convert(360, 'seconds').to('minutes')).toString());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});