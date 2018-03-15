const faker = require('faker');
const fs = require('fs');

const write = fs.createWriteStream('fakerData.json');

for (let i = 0; i < 10000; i++) {
  const chicken = {
    place_id: {
      type: String,
      unique: true,
    },
    place_name: faker.company.companyName(),
    photos: [
      {
        ref: faker.lorem.sentence(),
        url: faker.internet.url(),
        width: faker.random.number(),
        height: faker.random.number(),
      },
    ],
    reviews: [
      {
        name: faker.name.firstName(),
        avatar: faker.image.image(),
      },
    ],
  };
  write.write(JSON.stringify(chicken));
}
write.end();

// const fakerPhotos = {
//   ref: faker.lorem.text(),
//   url: faker.internet.url(),
//   width: faker.random.number(),
//   height: faker.random.number(),
// };
//
// const fakerReview = {
//   name: faker.name.firstName(),
//   avatar: faker.image.image(),
// };
//
// const fakerPhoto = {
//   place_id: {
//     type: String,
//     unique: true,
//   },
//   place_name: faker.company.businessName(),
//   photos: [  ref: faker.lorem.text(),
//     url: faker.internet.url(),
//     width: faker.random.number(),
//     height: faker.random.number(),],
//   reviews: [  name: faker.name.firstName(),
//     avatar: faker.image.image(),],
// };
