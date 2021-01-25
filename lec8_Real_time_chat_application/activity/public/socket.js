
socket.on("add-chat", function(chatObject){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("left");
    chatDiv.innerHTML = `${chatObject.name} : ${chatObject.chatMessage}` ;
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
