const fs = require( "fs" );

let file = fs.readdirSync("./testfolder") ;

for(let i = 0 ; i<file.length ; i++){
    sortFolder(file[i]);
}

function getExtension(file){
    // asjfhdfn.jpg =>["asfjbhjvf" , "jpg"].pop()
    return file.split(".").pop();
}

function folderExist(extension){
    if(extension == "jpg" || extension == "gif" || extension ==" jpeg"){
            //check/testfolder/images
            return fs.existsSync("./testfolder/Images");
    }
    else if(extension == "pdf" || extension == "doc" || extension == "txt"){
            //check/testfolder/documents
            return fs.existsSync("./testfolder/Documents");
            
    }

}

function createFolder(extension){
    if(extension == "jpg" || extension == "gif" || extension ==" jpeg"){
        //check/testfolder/images
        fs.mkdirSync("./testfolder/Images") ;
}
else if(extension == "pdf" || extension == "doc" || extension == "txt"){
        //check/testfolder/documents
        fs.mkdirSync("./testfolder/Documents") ;      
}
}

function moveFile(file, extension){      
    //`` string interpolation
    if(extension == "jpg" || extension == "gif" || extension ==" jpeg"){
       let sourceFile = `./testfolder/${file}`;//"./testfolder/abc.jpg"
       let destinationFile = `./testfolder/Images/${file}` ;
       fs.copyFileSync(sourceFile , destinationFile) ;
       fs.unlinkSync(sourceFile);
}
else if(extension == "pdf" || extension == "doc" || extension == "txt"){
    let sourceFile = `./testfolder/${file}`;
    let destinationFile = `./testfolder/Documents/${file}` ;
    fs.copyFileSync(sourceFile , destinationFile) ;
    fs.unlinkSync(sourceFile) ;
    
}
}

function sortFolder(file){
    let extension = getExtension(file);
    console.log(extension) ;
    let isFolderExist = folderExist(extension);
    console.log(isFolderExist);
    if(!isFolderExist){
        createFolder(extension);
    }
    moveFile(file, extension) ;

}