const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/calculator', (req, res) => {
  res.sendFile(__dirname + '/calculator.html');
});

app.get('/bmi', (req, res) => {
  res.sendFile(__dirname + '/bmi.html');
});

app.post('/bmi', (req, res) => {
  let height = parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);

  let bmi = height / (weight * weight);

  res.send(`Answer is ${bmi}`);
});

app.post('/calculator', (req, res) => {
  let n1 = parseInt(req.body.num1);
  let n2 = parseInt(req.body.num2);
  let add = n1 + n2;
  res.send(`Answer is ${add}`);
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
  console.log('Data recieved');
});
