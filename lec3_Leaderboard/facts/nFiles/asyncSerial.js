let fs = require("fs");

let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"] ;

// async task
//not with while loop , not with for loop

//recursive solution
let i = 0;

function cb(error, data){  
    console.log(data+"");
    i++;
    if(i==files.length){
        return ;
    }
    fs.readFile(files[i] , cb);
}

fs.readFile(files[i] , cb);