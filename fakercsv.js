const faker = require('faker');
const fs = require('fs');

const b = fs.createWriteStream('fakerBiz.csv');
const p = fs.createWriteStream('fakerPhotos.csv')
const r = fs.createWriteStream('fakerReviews.csv')

for (let i = 1; i <= 100; i++) {
  if (i === 100) {
    // var id = i.toString()
    var place_name = faker.company.companyName()
    b.write(`"${place_name}"`)
  } else {
    // var id = i.toString()
    var place_name = faker.company.companyName()
    b.write(`"${place_name}"\n`)
  }
}

for (let i = 1; i <= 100; i++) {
  if (i === 100) {
    var id = i.toString()
    for (let j = 0; j < 2; j++) {
      var ref = faker.lorem.word()
      var url = "https://d1913pi70etn58.cloudfront.net/photos/business0.png"
      var width = 10;
      var height = 10;
      var business_id = i
      p.write(`${id}, "${ref}", "${url}", ${width}, ${height}, ${business_id}`)
    }
  } else {
    var id = i.toString()
    for (let j = 0; j < 2; j++) {
      var ref = faker.lorem.word()
      var url = "https://d1913pi70etn58.cloudfront.net/photos/business0.png"
      var width = 10;
      var height = 10;
      var business_id = i
      p.write(`${id}, "${ref}", "${url}", ${width}, ${height}, ${business_id}\n`)
    }
  }

}

for (let i = 1; i <= 100; i++) {
  var id = i.toString()
  if (i === 100) {
    var name = faker.name.firstName();
    var avatar = "https://d1913pi70etn58.cloudfront.net/avatar/wonder-woman.png"
    var business_id = i
    r.write(`${id}, "${name}", "${avatar},", ${business_id} \n`)
  } else {
    var name = faker.name.firstName();
    if (i % 2 === 0) {
      var avatar = "https://d1913pi70etn58.cloudfront.net/avatar/batman.png"
    } else {
      var avatar = "https://d1913pi70etn58.cloudfront.net/avatar/wonder-woman.png"
    }
    var business_id = i
    r.write(`${id}, "${name}", "${avatar}", ${business_id} \n`)
  }
}
  //
  // LOAD DATA LOCAL INFILE "/Users/carltoncaven/Desktop/photo-gallery/fakerBiz.csv"
  // INTO TABLE business
  // COLUMNS TERMINATED BY ‘,’
  // OPTIONALLY ENCLOSED BY ‘“’
  // ESCAPED BY ‘“’
  // LINES TERMINATED BY ‘\n’
  // IGNORE 1 ROWS;
  //
  // LOAD DATA LOCAL INFILE "/Users/carltoncaven/Desktop/photo-gallery/fakerPhotos.csv"
  // INTO TABLE photos
  // COLUMNS TERMINATED BY ‘,’
  // OPTIONALLY ENCLOSED BY ‘“’
  // ESCAPED BY ‘“’
  // LINES TERMINATED BY ‘\n’
  // IGNORE 1 ROWS;
  //
  // LOAD DATA LOCAL INFILE "/Users/carltoncaven/Desktop/photo-gallery/fakerReviews.csv"
  // INTO TABLE reviews
  // COLUMNS TERMINATED BY ‘,’
  // OPTIONALLY ENCLOSED BY ‘“’
  // ESCAPED BY ‘“’
  // LINES TERMINATED BY ‘\n’
  // IGNORE 1 ROWS;
