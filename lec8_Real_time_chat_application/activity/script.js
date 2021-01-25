/*
let sendChat = document.querySelector("#send");
let chatList = document.querySelector(".chat-list");
let chatMessageInput = document.querySelector("#chat");

chatMessageInput.addEventListener("keyup" , function(e){
    if(e.keyCode == 13){
        sendChat.click();
    }
});

sendChat.addEventListener("click" , function(){
    let chat = chatMessageInput.value ;
    if(chat){
        let chatDiv = document.createElement("div");
        chatDiv.classList.add("chat");
        chatDiv.classList.add("right");
        chatDiv.innerHTML = chat;
        chatList.append(chatDiv);
        chatMessageInput.value="";

    }
});          
*/       

let sendChat = document.querySelector(".send-chat-button");
let chatArea = document.querySelector(".chat-area");
let chatMessageInput = document.querySelector("#input-text");

chatMessageInput.addEventListener("keyup" , function(e){
    if(e.keyCode == 13){
        sendChat.click();
    }
});

sendChat.addEventListener("click" , function(){
    let chat = chatMessageInput.value;
    if(chat){
        let chatDiv = document.createElement("div");
        chatDiv.classList.add("chat");
        chatDiv.classList.add("right");
        chatDiv.innerHTML = chat ;
        chatArea.append(chatDiv);
        chatMessageInput.value = "";
        chatArea.scrollTop = chatArea.scrollHeight ;
    }
})