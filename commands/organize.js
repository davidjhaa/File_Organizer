const path = require("path");
const fs = require("fs");

let types = {
    media: ["mp4", "mkv", "mp3","mov"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex',"csv",'json'],
    app: ['exe', 'dmg', 'pkg', "deb","apk"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath){
    //1. to check if srcPath is present
    if(srcPath == undefined){
        //The process.cwd() method returns the current working directory of the Node.js process.
        //console.log(srcPath); //undefined
        srcPath = process.cwd();
    }

    let organized_Files = path.join(srcPath, "Organized Files");
    if(fs.existsSync(organized_Files) == false){ //if organizedfiles nhi bana h to bana do warna rehne do
        fs.mkdir(organized_Files);
    }
    else
        console.log("Folder already exist");

    
}