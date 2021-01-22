const request = require("request") ;
const cheerio = require("cheerio");
const getMatch = require("./match");

function getAllMatches(link){
    request(link , cb);
}
function cb(error,response,data){
    if(error == null){
        parseData(data);
    }
    else if(response.statusCode == 404){
        console.log("Page not found!");
    }
    else{
        console.log(error);
    }
}

function parseData(html){
    //console.log(html);
    let ch = cheerio.load(html);
    let allATags = ch(`a[data-hover="Scorecard"]`);      // when more than 1 link is required .attr("href") can not be used
    //[<a /> , <a /> , <a /> , <a /> , <a /> , <a /> .... ]
    //console.log(allATags.length);
    for(let i=0 ; i<allATags.length ; i++){
        let link = ch(allATags[i]).attr("href");  //loop ka syntax
        let completeLink = `https://www.espncricinfo.com${link}`;
        //console.log(completeLink) ;
        getMatch(completeLink);
    }

}

//nodejs
//case 1 
module.exports = getAllMatches;
//case 2
//module.exports.getAllMatches = getAllMatches ;