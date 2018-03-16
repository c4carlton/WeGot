 const faker = require('faker');
const fs = require('fs');

const write = fs.createWriteStream('fakerDataTest.json');

// let regex = /\,(?!\s*?[\{\[\"\'\w])/g;
// let correct = input.replace(regex, '');

write.write('[');
// 0 - 0 < 1000000
// 1 - let i = 1000000; i < 2000000; i++
// 2 - let i = 2000000; i < 3000000; i++
// 3 - let i = 3000000; i < 4000000; i++
// 4 - let i = 4000000; i < 5000000; i++
// 5 - let i = 5000000; i < 6000000; i++
// 6 - let i = 6000000; i < 7000000; i++
// 7 - let i = 7000000; i < 8000000; i++
// 8 - let i = 8000000; i < 9000000; i++
// 9 - let i = 9000000; i < 10000000; i++

for (let i = 1; i < 2; i++) {
  const input = {
    place_id: i.toString(),
    place_name: faker.company.companyName(),
    photos: [
      {
        ref: faker.lorem.word(),
        url: faker.image.food(),
        width: Math.floor(Math.random() * 1000),
        height: Math.floor(Math.random() * 1000)
      },
    ],
    reviews: [
      {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
      },
    ],
  };
  write.write(`${JSON.stringify(input)},`);
}
write.write(']')
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
