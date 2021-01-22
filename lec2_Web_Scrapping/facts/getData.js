const request = require("request") ;
const fs = require("fs");
//hof

let link = "https://www.pepcoding.com" ;

request(link, cb);

function cb(error, response , data){
    //console.log(data) ; //shows html data // kaam ki cheez
    //console.log(error) ;
    //console.log(response) ;
    fs.writeFileSync("./data.html" , data) ;
}