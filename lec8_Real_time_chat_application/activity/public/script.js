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
    chatDiv.classList.add("chat-info");
    chatDiv.classList.add("right");
    //<div class="chat-info right"></div>

    let usernameDiv = document.createElement("div");
    usernameDiv.classList.add("username");
    usernameDiv.innerHTML= "You : " ;
    //<div class="username">You : </div>

    let chatMessageDiv = document.createElement("div");
    chatMessageDiv.classList.add("chat");
    chatMessageDiv.innerHTML= chat ;
    //<div class="chat">message</div>

    chatDiv.append(usernameDiv);
    chatDiv.append(chatMessageDiv);
    chatArea.append(chatDiv);

    chatMessageInput.value = "";
    chatArea.scrollTop = chatArea.scrollHeight ;

        socket.emit("send-chat" , chat) ;
    }
})


let changeGroupName = document.querySelector(".change-group-name");
let newGroupNameInput = document.querySelector("#new-group-name");
let previousGroupName = document.querySelector(".group-name");
let groupChatName = document.querySelector(".group-chat-name");

changeGroupName.addEventListener("click" , function(){
    if(newGroupNameInput.classList.contains("hide")){
        newGroupNameInput.classList.remove("hide");
    }
});
    /*<div class="change-group-name">
                        <input type="text" id="new-group-name" class="hide"   placeholder="Type new group name">
                    </div>*/
    /*                
    if(newGroupNameInput.classList.contains("hide")){
        newGroupNameInput.classList.remove("hide");
        if(newGroupNameInput.value){
            let newGroupName = newGroupNameInput.value;
            if(previousGroupName.innerHTML!=newGroupName){
                newGroupNameInput.addEventListener("keyup" , function(e){
                    if(e.keyCode == 13){
                        previousGroupName.remove();
                        let groupDiv = document.createElement("div");
                        groupDiv.classList.add("group-name");
                        groupDiv.innerHTML=newGroupName;
                        groupChatName.append(groupDiv);
                        document.body.append(groupChatName);
                    }
                });
                newGroupNameInput.value = "";
            }
        }
    }
    //newGroupNameInput.classList.add("hide");
})
*/



