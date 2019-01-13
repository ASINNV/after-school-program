const express = require('express');
const http = require('http');
const pgp = require('pg-promise')();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const port = process.env.PORT || 5000;

const db_obj = {
  host: 'localhost',
  port: 5432,
  database: 'ams',
  user: 'dev',
  password: process.env.PASSWORD
};

const db = pgp(db_obj);

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

function getGoals() {
  return db.many('SELECT * FROM goals;');
}

app.get("/", (req, res, next) => {
  getGoals()
    .then(function(data) {
      res.send(data);
    })
    .catch(function(err) {
      console.log(err, 'err from GET DATA block in server.js code');
      res.status(500).send('err from GET DATA block in server.js code');
    })
});

const server = http.createServer(app);

server.listen(port, function() {
  console.log("Listening on port " + port);
});