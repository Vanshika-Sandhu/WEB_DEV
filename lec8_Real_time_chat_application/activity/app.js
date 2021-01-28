// app.js => backend wala code
// webapp => npm init -y
// npm i express nodemon socket.io
// in package.json => "start":"nodemon app"


//express =>used to make api on the backend in easiery way
const express = require("express");

const app = express() ;
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static("public"));

let usersDB = [] ;

io.on('connection', function(socket){
    console.log(socket.id + " connected!!");

    usersDB.push({id:socket.id});

    socket.on("join" , function(username){
        for( let i=0 ; i <usersDB.length ; i++){
            if(usersDB[i].id == socket.id){
                usersDB[i].username = username ;
                break;
            }
        }
        socket.broadcast.emit("join-chat" , username);
    })

    socket.on("disconnect" , function(){
        console.log(socket.id + " disconnected!!");
        let disconnectedUser;
        let filteredUsers = usersDB.filter(function(socketObject){
            if( socketObject.id == socket.id ){
                disconnectedUser = socketObject.username ;
                return false;
            }
            else{
                return true;
            }
        })
        
        usersDB =filteredUsers ;
        socket.broadcast.emit("leave-chat" , disconnectedUser);
    })

    socket.on("send-chat" , function(chatMessage){
        for(let i = 0 ;i <usersDB.length ; i++){
            if(usersDB[i].id == socket.id){
                let name = usersDB[i].username;
                socket.broadcast.emit("add-chat" , { name , chatMessage});
                break;
            }
        }  
        //console.log(chatMessage);
    })
  });

http.listen(3000 , function(){
    console.log("app started at port 3000!!!!");
})




