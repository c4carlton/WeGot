const faker = require('faker');
const fs = require('fs');

const write = fs.createWriteStream('fakerData9.json');


// 0 - let i = 0; i <= 1000000; i++        // 3 - 3
// 1 - let i = 1000001; i <= 2000000; i++  // 3 - 3
// 2 - let i = 2000001; i <= 3000000; i++  // 3 - 3
// 3 - let i = 3000001; i <= 4000000; i++  // 3 - 3
// 4 - let i = 4000001; i <= 5000000; i++  // 2 - 3
// 5 - let i = 5000001; i <= 6000000; i++  // 2 - 3
// 6 - let i = 6000001; i <= 7000000; i++  // 2 - 3
// 7 - let i = 7000001; i <= 8000000; i++  // 2 - 3
// 8 - let i = 8000001; i <= 9000000; i++  // 2 - 3
// 9 - let i = 9000001; i <= 10000000; i++ // 1 - 3

for (let i = 9000001; i <= 10000000; i++) {
  const input = {
    _id: i.toString(),
    place_id: i.toString(),
    place_name: faker.company.companyName(),
    photos: [
      {
        ref: faker.lorem.word(),
        url: "https://d1913pi70etn58.cloudfront.net/photos/business0.png",
        width: 10,
        height: 10,
      },
      {
        ref: faker.lorem.word(),
        url: "https://d1913pi70etn58.cloudfront.net/photos/business1.png",
        width: 15,
        height: 15,
      },
      {
        ref: faker.lorem.word(),
        url: "https://d1913pi70etn58.cloudfront.net/photos/business2.png",
        width: 12,
        height: 12,
      },
    ],
    reviews: [
      {
        name: faker.name.firstName(),
        avatar: "https://d1913pi70etn58.cloudfront.net/avatar/wonder-woman.png"
      }
    ],
  };
  write.write(`${JSON.stringify(input)} \n`);
}
write.end();
