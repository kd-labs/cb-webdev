const fs = require("fs/promises");

async function writeIntoFile(filePath, content) {
  return fs.writeFile(filePath, content, "utf-8");
}
