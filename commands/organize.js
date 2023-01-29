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
    // 1. to check if srcPath is present
    if(srcPath == undefined){
        // The process.cwd() method returns the current working directory of the Node.js.
        // console.log(srcPath); //undefined
        srcPath = process.cwd();
    }

    // 2. to create a directory-> organized_files
    let organized_Files = path.join(srcPath, "Organized Files");
    if(fs.existsSync(organized_Files) === false){ //if organizedfiles nhi bana h to bana do warna rehne do
        fs.mkdirSync(organized_Files);
    }
    else
        console.log("Folder already exist");


    //3. scan the entire srcPath(doenloads folder in this case)

    // fs.readdirsync read all the files name present in that directory
    let allFiles = fs.readdirSync(srcPath);
 
    for(let i = 0; i < allFiles.length; i++){
        //1. path of all files in given directory
        let fullPathOfFile = path.join(srcPath, allFiles[i]);
        //lstatsync gives the information regarding the link provided ,
        let isThisaFile = fs.lstatSync(fullPathOfFile).isFile(); //true-> file hai to OR false-> agar folder h 

        if(isThisaFile){
            // 1.1 get extname
            // path.extname give ext name of that file eg :- .pdf, .docx, etc
            let extName = path.extname(allFiles[i]).split(".")[1];   //by split method we ignored . part of the extension
            // 1.2 get folderName
            let folderName = getFolderName(extName);
            //1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document, media etc)
                        //copy      kya copy kro    paste
            copyFileToDest(srcPath, fullPathOfFile, folderName);
        }
    }
}

// this function gives name of folder in which the file is to be organized
function getFolderName(extName){
    for(let key in types){
        for(let i = 0; i < types[key].length; i++){
            if(types[key][i] == extName){
                return key;
            }
        }
    }
    return "miscellaneous";
}


// this function copies files from srcpath to organized files

function copyFileToDest(srcPath, fullPathOfFile, folderName){
    // 1. pehle destfolder path banana h
    let destFolderPath = path.join(srcPath, "organized Files", folderName);

    // 2. check if destfolder is already created
    if(!fs.existsSync(destFolderPath)){
        fs.mkdirSync(destFolderPath);
    }

    //3. copy file from src folder to dest folder

    // path.basename returns last portion of path
    let filename = path.basename(fullPathOfFile);
    let destFileName = path.join(destFolderPath, filename);

    fs.copyFileSync(fullPathOfFile, destFileName);
}


module.exports = {
    organize : organize,
}

// organize("C:\Users\david\Desktop\File_Organizer\demo");