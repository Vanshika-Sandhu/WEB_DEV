let sendChat = document.querySelector(".send-chat-button");
let chatArea = document.querySelector(".chat-area");
let chatMessageInput = document.querySelector("#input-text");

let username = prompt("Enter your name");
console.log(username);

socket.emit("join" , username) ;

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

        socket.emit("send-chat" , chat) ;
    }
})