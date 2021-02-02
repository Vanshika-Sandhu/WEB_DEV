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
    usernameDiv.classList.add("sender-name");
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
});

socket.on("join-chat" , function({username, usersDB}){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("join");
    chatDiv.innerHTML = `${username} joined the chat` ;
    chatArea.append(chatDiv);
    chatArea.scrollTop = chatArea.scrollHeight ;
    //ActiveUsersDiv(username , usersDB);
});

socket.on("leave-chat" , function({username,usersDB}){
    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("leave");
    chatDiv.innerHTML = `${username} left the chat` ;
    chatArea.append(chatDiv);
    chatArea.scrollTop = chatArea.scrollHeight ;
});

socket.on("new-group-name" , function(changeInfo){
    groupChatName.innerHTML = `<div class="group-name">${changeInfo.changedName}</div>` ;

    let chatDiv = document.createElement("div");
    chatDiv.classList.add("chat");
    chatDiv.classList.add("change");
    chatDiv.innerHTML = `${changeInfo.username} changed the group name` ;
    chatArea.append(chatDiv);
    chatArea.scrollTop = chatArea.scrollHeight ;
});

/*
function ActiveUsersDiv(username , usersDB){
  /*
    <div class="active-username">
        <div class="name">Abcd</div>
        <div class="icon">
            <i class="far fa-user-circle"></i>
        </div>
    </div>
  */
 /*
let activeUsers = document.querySelector(".active-users");
let activeUserDiv = document.createElement("div");
activeUserDiv.classList.add("active-username");
let name =  document.createElement("div");
name.classList.add("name");
name.innerHTML = `${username}`;
let icon =  document.createElement("div");
icon.classList.add("icon");
let iTag =  document.createElement("i");
iTag.classList.add("far fa-user-circle");
icon.append(iTag);
activeUserDiv.append(name);
activeUserDiv.append(icon);
activeUsers.append(activeUserDiv);
document.body.append(activeUsers);
}
*/