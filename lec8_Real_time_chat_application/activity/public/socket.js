
socket.on("add-chat", function(chatObject){

    /*
    <div class="chat-info left">
                        <div class="username">ABC</div>
                        <div class="chat">Hiiiii</div>
                    </div>
                    */
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat-info");
    chatDiv.classList.add("left");
    //<div class="chat-info left"></div>

    let usernameDiv = document.createElement("div");
    usernameDiv.classList.add("username");
    usernameDiv.innerHTML=`${chatObject.name} : ` ;
    //<div class="username">name</div>

    let chatMessageDiv = document.createElement("div");
    chatMessageDiv.classList.add("chat");
    chatMessageDiv.innerHTML=`${chatObject.chatMessage}` ;
    //<div class="chat">message</div>

    chatDiv.append(usernameDiv);
    chatDiv.append(chatMessageDiv);
    chatArea.append(chatDiv);

    chatArea.scrollTop = chatArea.scrollHeight ;
})

socket.on("join-chat" , function(username){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("join");
    chatDiv.innerHTML = `${username} joined the chat` ;
    chatArea.append(chatDiv);
    chatArea.scrollTop = chatArea.scrollHeight ;
})

socket.on("leave-chat" , function(username){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("leave");
    chatDiv.innerHTML = `${username} left the chat` ;
    chatArea.append(chatDiv);
    chatArea.scrollTop = chatArea.scrollHeight ;
})
