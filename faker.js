const faker = require('faker');
const fs = require('fs');

const write = fs.createWriteStream('fakerData9.json');

// let regex = /\,(?!\s*?[\{\[\"\'\w])/g;
// let correct = input.replace(regex, '');

// write.write('[');
// 0 - 1 <= 1000000
// 1 - let i = 1000001; i <= 2000000; i++
// 2 - let i = 2000001; i <= 3000000; i++
// 3 - let i = 3000001; i <= 4000000; i++
// 4 - let i = 4000001; i <= 5000000; i++
// 5 - let i = 5000001; i <= 6000000; i++
// 6 - let i = 6000001; i <= 7000000; i++
// 7 - let i = 7000001; i <= 8000000; i++
// 8 - let i = 8000001; i <= 9000000; i++
// 9 - let i = 9000001; i <= 10000000; i++

for (let i = 9000001; i <= 10000000; i++) {
  const input = {
    place_id: i.toString(),
    place_name: faker.company.companyName(),
    photos: [
      {
        ref: faker.lorem.word(),
        url: faker.image.food(),
        width: 10,
        height: 10,
      },
      {
        ref: faker.lorem.word(),
        url: faker.image.business(),
        width: 10,
        height: 10,
      },
      {
        ref: faker.lorem.word(),
        url: faker.image.business(),
        width: 10,
        height: 10,
      },
      {
        ref: faker.lorem.word(),
        url: faker.image.food(),
        width: 10,
        height: 10,
      },
      {
        ref: faker.lorem.word(),
        url: faker.image.business(),
        width: 10,
        height: 10,
      },
      {
        ref: faker.lorem.word(),
        url: faker.image.business(),
        width: 10,
        height: 10,
      },
      {
        ref: faker.lorem.word(),
        url: faker.image.food(),
        width: 10,
        height: 10,
      },
      {
        ref: faker.lorem.word(),
        url: faker.image.business(),
        width: 10,
        height: 10,
      },
    ],
    reviews: [
      {
        name: faker.name.firstName(),
        avatar: faker.image.avatar(),
      },
    ],
  };
  write.write(`${JSON.stringify(input)} \n`);
}
// write.write(']')
write.end();
