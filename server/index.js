// require('newrelic');
// const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient
const cors = require("cors");
const path = require("path");
const redis = require('redis')
const morgan = require('morgan');
const PhotoModel = require('../database/index.js')
const app = express();
const util = require('util');
const port = 3001;

let mongoURI = process.env.DATABASE || 'mongodb://127.0.0.1/photos';
console.log(mongoURI, 'this should be mongoURI')
mongoose.connect(mongoURI)
    .then(() => {
    console.log(`server is connected to db @ ${mongoURI}`)
  }).catch((error) => {
    console.log(error)
  })

app.use(cors());
app.use(bodyParser.json());

// something wrong with redis client...not connecting correctly
const client = redis.createClient('redis://18.144.59.178:6379');
// client.get = util.promisify(client.get);
client.on('connect', () => {
  client.flushdb((err, succeeded) => {
    console.log(succeeded, 'this has succeeded'); // will be true if successfull
  });
});

// db for localhost
// mongoose.connect('mongodb://localhost/photos');


// serve static files from dist dir
app.use("/restaurants/:id", express.static(path.join(__dirname, "../client/dist")));

app.get('/', (req, res) => {
  res.status(200).redirect('/restaurants/1');
});

// retrieve data from API(db)
app.get('/api/restaurants/:id/gallery', (req, res) => {
  var id = Number(req.params.id)
  client.get(id, (err, data) => {
    if (err) {
      console.log(err)
    } else if (data) {
      res.json(JSON.parse([data]));
    } else {
      PhotoModel.find({place_id: id}, (err, response)=> {
        if (err) {
          console.log(err)
        } else {
          client.setex(req.params.id, 60, JSON.stringify(response));
          res.json(response);
        }
      })
      // PhotoModel.find(req.params.id, (err, data) => {
      //   if (err) {
      //     console.log('here3')
      //     res.sendStatus(500);
      //   } else {
      //     console.log('awwwyusss')
      //     client.setex(req.params.id, 60, JSON.stringify(data));
      //     res.json(data);
      //   }
      // });
    }
  });
});

app.listen(port, () => console.log(`Gallery App listening on port ${port}!`));

module.exports = app;
