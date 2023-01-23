const process = require("process");
const fs = require("fs");

let input = process.argv.slice(2);

let command = input[0];
let path = input[1];

switch(command){
    case "tree":
        // tree function
        break;
    case "organize":
        // organize function
        break;
    case "help":
        // help function
        break;
    default:
        // executes if cmmand not found
        console.log("command not found");
        break;

}