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
      if (err) reject("I could not find that file bby ❤️");
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) return "Could not find file 😒";
      resolve("arisss gamomivda! 😎");
    });
  });
};

readFilePro(`${__dirname}/dog.txt`).then((data) => {
  console.log(`Breed: ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);

      fs.writeFile("dog-img-txt", res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log("Random dog image saved to file");
      });
    })

    // helps us to catch errors easyer
    .catch((err) => {
      console.log(err.message);
    });
});
