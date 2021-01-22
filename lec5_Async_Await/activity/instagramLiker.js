const puppeteer = require("puppeteer");
const id = "sandhuvanshika01@gmail.com";
const pw = "mona6975";

let profile = "Pepcoding";

(async function(){
    try{
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
          });
        
        let page = await browser.pages();
        let tab = page[0];

        //login page jana hai
        await tab.goto('https://www.instagram.com/accounts/login/?');
        console.log("reached login page");

        //id and password enter  karna hai and login pr click krna hai  //navigation
        await tab.waitForSelector('input[name="username"]' , {visible:true});
        await tab.type('input[name="username"]' , id);
        console.log("id entered");
        await tab.waitForSelector('input[name="password"]' , {visible:true});    
        await tab.type( 'input[name="password"] ', pw);
        console.log("password entered");
        await Promise.all([ tab.waitForNavigation({waitUntil:"networkidle2"}) , tab.click(".sqdOP.L3NKy.y3zKF ") ]); // navigation
        console.log("logged in");

        //save idpass => not now pr click krna hai //navigation
        await Promise.all([ tab.waitForNavigation({waitUntil:"networkidle2"}) , tab.click('.sqdOP.yWX7d.y3zKF') ]);

        //send notification => not now pr click krna hai
        await tab.waitForSelector('.aOOlW.HoLwm' , {visible:true});    
        await tab.click( '.aOOlW.HoLwm');

        //search box pr click and type pepcoding
        await tab.click('input[type="text"]'); 
        await tab.type('.XTCLo.x3qfX ', profile);

        //pepcoding k first link pr jaana hai //navigation
        // await Promise.all([ tab.waitForNavigation({waitUntil:"networkidle2"}) , tab.click(".drKGC .fuqBx .yCE8d.JvDyy ") ]); // navigation
        //let pepcodingBtn= await tab.$('.yCE8d.JvDyy'); 
        await tab.waitForSelector('a[href="/pepcoding/"]' , {visible:true});
        await tab.click('a[href="/pepcoding/"]');
        console.log("pepcoding ig account appeared");

        //first post kholni hai //navigation
        //.v1Nh3.kIKUG._bz0w
        //let firstRowPosts = await tab.$$(".v1Nh3.kIKUG._bz0w");
        //let firstPost = firstRowPosts[0];
        //firstPost = 
        //let addChallengeBtn = await tab.$('.btn.btn-green.backbone.pull-right');
        //let addChallengeLink = await tab.evaluate( function(element){   return element.getAttribute("href");  }  , addChallengeBtn);
        //firstPostLink = `https://www.instagram.com/pepcoding${firstPostLink}`;
        await tab.waitForSelector('a[href="/p/CJ5tUOirVD_/"]' , {visible:true});
        await tab.click('a[href="/p/CJ5tUOirVD_/"]');
        console.log("First post appeared");

        //like krna hai and next button pr press krna hai for all the post //navigation
        for(let i = 1; i < 472 ; i++){
            //like for one post
            await tab.waitForSelector('.fr66n .QBdPU' , {visible:true});
            await tab.click('.fr66n .QBdPU');
            await tab.waitForSelector('._65Bje.coreSpriteRightPaginationArrow' , {visible:true});
            await tab.click('._65Bje.coreSpriteRightPaginationArrow');
        }
        console.log("all posts likes");

        //close




    }
    catch(error){
        console.log(error);

    }
}
)();