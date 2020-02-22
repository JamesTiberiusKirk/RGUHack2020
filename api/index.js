const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id');
  res.header('Access-Control-Expose-Headers', 'x-access-token, x-refresh-token');
  next();
});

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) =>{
  res.sendStatus(200).send(ok);
});

let server = app.listen(3000, () => {
  console.log(`Example app listening at port ${3000}`);
});
