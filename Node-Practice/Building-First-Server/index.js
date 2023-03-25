const express = require('express');
const app = express();

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/', (req, res) => {
  console.log('Data recieved');
  res.send('Recieved the data');
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
  console.log('Data recieved');
});
