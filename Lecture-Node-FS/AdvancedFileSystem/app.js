const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "Data");

let file1Dat;
let file2Dat;

console.log(`dirpath : ${dirPath}`);

fs.readFileSync(
  path.join(dirPath, "file1.txt"),
  { encoding: "utf-8", flag: "r" },
  (err, data) => {
    if (err) throw new Error("cannot read file");
    file1Dat = data;
    console.log(file1Data);
  }
);

fs.readFileSync(
  path.join(dirPath, "file2.txt"),
  { encoding: "utf-8", flag: "r" },
  (err, data) => {
    if (err) throw new Error("cannot read file");
    file2Dat = data;
    console.log(file2Data);
  }
);

const file1NumsArr = file1Dat.split("\n");
const file2NumsArr = file2Dat.split("\n");

const res = file1NumsArr.concat(file2NumsArr);

res.sort((a, b) => a - b);

fs.writeFileSync(path.join(dirPath, "file3.txt"), res, {
  encoding: UTF - 8,
  flag: "w",
});

console.log("Program finished");

/******************** MAIN PROGRAM FINISHED *********************/
