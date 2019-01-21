const express = require('express');
const http = require('http');
const pgp = require('pg-promise')();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const mailjet = require ('node-mailjet')
  .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE);

// const request = mailjet
//   .post("send", {'version': 'v3.1'})
//   .request({
//     "Messages":[
//       {
//         "From": {
//           "Email": "adrian@andmoore.xyz",
//           "Name": "Mailjet Pilot"
//         },
//         "To": [
//           {
//             "Email": "omgitsadrian@gmail.com",
//             "Name": "passenger 1"
//           }
//         ],
//         "Subject": "Your email flight plan!",
//         "TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
//         "HTMLPart": "<h3>Dear passenger 1, welcome to Mailjet!</h3><br />May the delivery force be with you!"
//       }
//     ]
//   });

// request
//   .then((result) => {
//     console.log(result.body)
//   })
//   .catch((err) => {
//     console.log(err.statusCode)
//   });


const port = process.env.PORT || 5000;

// const db_obj = {
//   host: 'localhost',
//   port: 5432,
//   database: 'ams',
//   user: 'dev',
//   password: process.env.PASSWORD
// };
//
// const db = pgp(db_obj);

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

// function getGoals() {
//   return db.many('SELECT * FROM goals;');
// }
//
// app.get("/", (req, res, next) => {
//   getGoals()
//     .then(function(data) {
//       res.send(data);
//     })
//     .catch(function(err) {
//       console.log(err, 'err from GET DATA block in server.js code');
//       res.status(500).send('err from GET DATA block in server.js code');
//     })
// });

app.post("/api/send-email", function(req, res) {
  let requestBody = req.body;
  mailjet
    .post("send", {'version': 'v3.1'})
    .request(requestBody)
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      res.send(err);
    });
});

const server = http.createServer(app);

server.listen(port, function() {
  console.log("Listening on port " + port);
});