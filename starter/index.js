const fs = require("fs");
const { resolve } = require("path");
const superagent = require("superagent");

/* 
ფოტოს API წამოვიღეთ საიტიდან და დააგენერირა~
ფოტო იმის მიხედვით თუ რა ჯიშიც მივუთთეთ txt ფაილში
we used there callBack() => ||| and also "promise"
*/
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject("ver vanxe shechema 😒");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject("could not write file ! ! ");
      resolve("success");
    });
  });
};

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro("dogs-img.txt", res.body.message);
  })
  // helps us to catch errors easyer
  .then(() => {
    console.log("Random dog image saved to file");
  })
  .catch((err) => {
    console.log(err.message);
  });
