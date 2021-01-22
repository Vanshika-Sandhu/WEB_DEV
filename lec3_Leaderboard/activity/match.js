const request = require("request") ;
const cheerio = require("cheerio");
const fs = require("fs");

let leaderboard = [] ;
let count = 1 ;

function getMatch(link){
    console.log("Sending Request " , count);
    request (link , cb);
    count++;
}

function cb(error, response, data){
    count--;
    console.log(count , "Data Received");
    parseData(data);
    if(count==1)
    console.table(leaderboard);
}

function parseData(data){
    //console.log(html);
    let ch = cheerio.load(data);
    let bothInnings = ch(`.match-scorecard-page .Collapsible `);
    //[<div class = "Collapsible"></div> , <div class = "Collapsible"></div> ]
    //fs.writeFileSync("./bothInnings.html", bothInnings + "") ;
    for(let i =0;i<bothInnings.length ; i++){
        let teamName = ch(bothInnings[i]).find("h5").text();
        teamName = teamName.split("INNINGS")[0].trim() ;
        //console.log(teamName);

        let allTrs = ch(bothInnings[i]).find(".table.batsman tbody tr");
        //[<tr></tr> , .......]
        for( let j = 0 ;j<allTrs.length-1 ; j++){
            let allTds = ch(allTrs[j]).find("td");
            if(allTds.length > 1){
                //valid tds
                let batsman = ch(allTds[0]).find("a").text().trim();
                let runs = ch(allTds[2]).text().trim();
                let balls = ch(allTds[3]).text().trim();
                let fours = ch(allTds[5]).text().trim();
                let sixes = ch(allTds[6]).text().trim();
                let strikeRate = ch(allTds[7]).text().trim();
                //console.log(`Batsman = ${batsman} Runs = ${runs} Balls = ${balls} Fours = ${fours} Sixes = ${sixes} SR = ${strikeRate}`) ;
                createLeaderBoard(teamName , batsman , runs , balls , fours , sixes);



                // my code*****************************************************************
                //leaderboard(teamName , batsman , runs , balls , fours , sixes , strikeRate);
            }
        }
        //console.log("#####################################################");
    }
}

function createLeaderBoard(teamName , batsman , runs , balls , fours , sixes){
    runs = Number(runs);
    balls = Number(balls);
    fours = Number(fours);
    sixes = Number(sixes);
    //check if leaderboard has this entry
    //if yes => update
    for(let i=0 ; i<leaderboard.length ; i++){
        let entry = leaderboard[i];
        if(entry.Team == teamName && entry.Batsman == batsman){
            //update batsman entry
            entry.Runs += runs;
            entry.Balls += balls;
            entry.Fours += fours;
            entry.Sixes += sixes;
            return;
        }
    }
    //else => new entry add
    let entry ={
        Team : teamName, 
        Batsman : batsman,
        Runs : runs,
        Balls : balls,
        Fours : fours,
        Sixes : sixes 
    }
    leaderboard.push(entry);
}

module.exports = getMatch ;