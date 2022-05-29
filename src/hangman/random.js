var words = [];
var words_length = [];
var categories = [];

const path = require("path");
const fs = require("fs");
//joining path of directory
const directoryPath = path.join(__dirname, "words");
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    const filename = path.join(__dirname, "words", file);
    var text = fs.readFileSync(filename, "utf-8");
    text = text.split(/\r?\n/);

    words.push(text);
    words_length.push(text.length);
    categories.push(file.slice(0, -4));
  });
});

function getRandom(maximum, minimum = 0) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

function randomWord() {
  let idx = getRandom(words.length),
    word = words[idx][getRandom(words_length[idx])],
    hint = categories[idx];
  word = word.replace(/[^\w\s]/gi, " ");
  return { word, hint };
}

export { randomWord };
