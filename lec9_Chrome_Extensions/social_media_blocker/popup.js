let siteName = document.querySelector("#site-name");
let blockBtn = document.querySelector("#block-site");
let blockedList = document.querySelector("#blocked-list");

let localBlockList = [];

chrome.runtime.sendMessage({type:"Get"}, function(blockList){
    localBlockList = blockList ;
    for(let i=0 ;i<localBlockList.length ; i++){
        addBlockSitesToUi(localBlockList[i].site);
    }
});

function addBlockSitesToUi(site){
    let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = site ;
        
        let btn = document.createElement("button");
        btn.classList.add("btn");
        btn.classList.add("btn-danger");
        btn.innerHTML = "UNBLOCK";

        btn.addEventListener("click" , function(){
            let filteredLocalBlockSiteList = localBlockList.filter(function(localBlockListObject){
                return localBlockListObject.site != site ;
            });
            localBlockList = filteredLocalBlockSiteList;
            li.remove();
            chrome.runtime.sendMessage( {type:"Unblock" , site }, function(response) {
                console.log(response);
              });
        });
        li.append(btn);
        blockedList.append(li);
}

siteName.addEventListener("keyup" , function(e){
    if(e.keyCode == "13"){
        blockBtn.click();
    }
})

blockBtn.addEventListener("click" , function(){
    let site = siteName.value;
    if(site){
        for(let i=0 ; i<localBlockList.length ; i++){
            if(localBlockList[i].site.includes(site) || site.includes(localBlockList[i].site) ){
                alert("Site Already Blocked !")
                return;
            }
        }
        
        addBlockSitesToUi(site);
        localBlockList.push({site});
        siteName.value = "";

        chrome.runtime.sendMessage({type:"Add" , site}, function(response) {
            console.log(response);
          });
    }
});