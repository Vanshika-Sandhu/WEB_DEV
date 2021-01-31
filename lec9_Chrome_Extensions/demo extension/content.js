let localImages = ["./images/d1.jpg" , "./images/d2.jpg" , "./images/d3.jpg" , "./images/d4.jpg" ,"./images/d5.jpg"];

function changeImages(){
    let images = document.querySelectorAll("img");
    for(let i=0 ; i<images.length ; i++){
        let idx = Math.floor(Math.random() * localImages.length);
        let absolutePath = chrome.extension.getURL(localImages[idx]);
        images[i].src = absolutePath;
    }
}

chrome.runtime.onMessage.addListener(function(request , sender , sendResponse){
    changeImages();
    sendResponse("Images have been changes!");
})
