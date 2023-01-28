const help_Function = require("./commands/help");
const organize_Function = require("./commands/organize")
const tree_Function = require("./commands/tree")
const process = require("process");
const fs = require("fs");

let input = process.argv.slice(2);
// console.log(input + "");

let command = input[0];
let path = input[1];

switch(command){
    case "tree":
        // tree function
        tree_Function.tree(path);
        break;
    case "organize":
        // organize function
        organize_Function.organize(path);
        break;
    case "help":
        // help function
        help_Function.help();
        break;
    default:
        // executes if command not found
        console.log("command not found");
        break;

}