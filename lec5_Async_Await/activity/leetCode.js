const puppeteer = require("puppeteer");
const id = "xovoro4447@nonicamy.com";
const pw = "aaaa4444";


(async function(){
    try{
        let browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
          });

          let page = await browser.pages();
          let tab = page[0];

          //reach login page
          await tab.goto('https://leetcode.com/accounts/login/');
          console.log("reached login page");

          //username and id
          await tab.waitForSelector('#id_login' , {visible:true});
          await tab.type('#id_login' , id);
          console.log("typed id");
          await tab.waitForSelector('#id_password', {visible:true});
          await tab.type('#id_password', pw);
          console.log("typed password");
          await tab.waitForSelector('#signin_btn .btn-content-container__177h', {visible:true});
          await  tab.click("#signin_btn .btn-content-container__177h") ; 
          console.log("logged in");
          await tab.waitForSelector('.feedback-tab-close-button #close-icon-svg');
          await  tab.click(".feedback-tab-close-button #close-icon-svg") ; 


          //go to problems





          //




    }
    catch(error){
        console.log(error);
    }
}
)();
