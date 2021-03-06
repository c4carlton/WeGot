const mongoose = require('mongoose');

const PhotosSchema = mongoose.Schema({
  ref: String,
  url: String,
  width: Number,
  height: Number,
});

const ReviewSchema = mongoose.Schema({
  name: String,
  avatar: String,
});

const photoSchema = mongoose.Schema({
  _id: String,
  place_id: {
    type: String,
    unique: true,
  },
  place_name: String,
  photos: [PhotosSchema],
  reviews: [ReviewSchema],
});

module.exports = mongoose.model('Photos', photoSchema);

// findOne will retrieve the photo associated with the given id
// function findOne(id, callback) {
//   console.log('database finding by id:', id)
//   Photos.find({
//     _id: id,
//   }, callback);
// }
//
// exports.findOne = findOne;
