// require('newrelic');
const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// const connect = () => {
//     let mongoURI = process.env.DATABASE || 'mongodb://127.0.0.1/photos';
//     console.log('connecting to', mongoURI);
//     return mongo.connect(mongoURI)
//     .then(() => (console.log('connected to database')))
//     .catch((err) => {
//       console.log(err)
//       return err;
//     });
// };

// db for ec2
let mongoURI = process.env.DATABASE || 'mongodb://127.0.0.1/photos';
console.log(mongoURI, 'this should be mongoURI')
mongoose.connect(mongoURI, (error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Connected to DATABASE!')
  }
});

// db for localhost
// mongoose.connect('mongodb://localhost/photos');

const Photos = require("../database/index.js");

const app = express();

app.use(cors());

app.use(bodyParser.json());

// serve static files from dist dir
app.use("/restaurants/:id",
  express.static(path.join(__dirname, "../client/dist"))
);

// if no ID typed into url bar, redirect to this ID
app.get("/", (req, res) => {
  res.status(200).redirect("/restaurants/ChIJUcXYWWGAhYARmjMY2bJAG2s");
});

// retrieve data from API(db)
app.get("/api/restaurants/:id/gallery", (req, res) => {
  const id = req.params.id;
  console.log("server querying for id: ", id);
  Photos.findOne(id, (err, data) => {
    if (err) {
      console.log(err, ' this is error in expresss')
      res.sendStatus(500);
    } else {
      console.log(data, 'this is data in express')
      res.json(data);
    }
  });
});

app.listen(3001, () => console.log("Gallery App listening on port 3001!"));

module.exports = app;
