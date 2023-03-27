const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
});
