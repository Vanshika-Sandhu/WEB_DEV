// console.log(ul);

//let li = document.createElement("li");
//li.innerHTML = "Learn CSS" ;

//ul.append(li);


//let body = document.querySelector("body");
//let h1Element = document.createElement("div");
//h1Element.innerHTML = "Hii i am a dynamically added heading";
// body.append(h1Element);

//console.log(addToDoButton);

let addToDoButton = document.querySelector(".add-todo");
let ul = document.querySelector(".todos");
let todoInput = document.querySelector("#todo");

addToDoButton.addEventListener("click" , function(){
    let todo = todoInput.value;
    console.log(todo);
    if(todo){
        let li = document.createElement("li");
        li.innerHTML = todo;
        ul.append(li);
        todoInput.value = "";
    } 
})