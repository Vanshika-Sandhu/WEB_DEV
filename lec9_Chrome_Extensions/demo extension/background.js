chrome.tabs.onUpdated.addListener(function(tabId , changeInfo , tab){
    // console.log(tabId);
    // console.log(changeInfo);
    // console.log(tab);
    if(tab.url.includes("facebook") && tab.status=="complete"){
        chrome.tabs.remove(tabId , function(){
            console.log("removed tab !!");
        })
    }

})