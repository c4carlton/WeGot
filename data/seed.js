// const data = require('./allData.js');
const data = require('../fakerDataTest.json')
const mongoose = require('mongoose');
const Photos = require('../database/index.js');

// const API_KEY = 'AIzaSyCjAQ33tNqsfUoF1CV0TDw8GcoHqSf3dgo';

mongoose.connect('mongodb://localhost/photos', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('mongoose connected');
  }
});

// mongoose.connect('mongodb://database/photos', (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('mongoose connected');
//   }
// });

function seedDb() {
  let count = 0;
  Photos.isSeeded().then((result) => {
    console.log(result, 'this is result')
    if (result === 0) {
      data.forEach((place) => {
        // for each ID
        const entry = {
          place_id: place.place_id,
          place_name: place.place_name,
          photos: [],
          reviews: [],
        };
        // push photo details to entry
        const photos = place.photos;
        const PHOTOS_URL =
          'http://lorempixel.com/640/480/food';

        for (let i = 0; i < photos.length; i += 1) {
          const photoRef = photos[i].photo_reference;
          const photoUrl = "http://lorempixel.com/640/480/food";
          const details = {
            ref: photoRef,
            url: photoUrl,
            width: photos[i].width,
            height: photos[i].height,
          };
          entry.photos.push(details);
        }

        // push each review to entry
        const reviews = place.reviews;

        for (let j = 0; j < reviews.length; j += 1) {
          const review = {
            name: reviews[j].name,
            avatar: reviews[j].avatar,
          };
          entry.reviews.push(review);
        }

        Photos.insertOne(entry, (err) => {
          if (err) {
            console.log(err);
          } else {
            count += 1;
            if (count === 195) {
              console.log('database successfully seeded');
              mongoose.disconnect();
            }
          }
        });
      });
    } else {
      console.log('database is already seeded');
      mongoose.disconnect();
    }
  });
}

seedDb(data);

module.exports = seedDb;
