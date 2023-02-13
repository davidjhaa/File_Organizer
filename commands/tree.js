const fs = require("fs");

const path = require("path");

function tree(dirPath) {
  if (dirPath == undefined) {
    console.log("Please Enter a Valid Path");
    return;
  }
  let doesExist = fs.existsSync(dirPath);
  if (doesExist == true) {
    treeHelper(dirPath, " ");
  }
}

module.exports = {
    tree: treeFn,
  };