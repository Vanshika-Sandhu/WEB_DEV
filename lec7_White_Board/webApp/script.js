let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let {top : canvasTop} = canvas.getBoundingClientRect();

canvas.height = window.innerHeight - canvasTop ;
canvas.width = window.innerWidth ;

window.addEventListener("resize" , function(){
    canvas.height = window.innerHeight - canvasTop ;
    canvas.width = window.innerWidth ;
})

let db =[];
let redoDB =[];
let line = [];
let isMouseDown = false ;

canvas.addEventListener("mousedown" , function(e){
    isMouseDown = true ; 
    let x = e.clientX;
    let y = e.clientY - canvasTop ;
    ctx.beginPath();
    ctx.moveTo(x,y);
    let pointObject = {
        id : "md",
        x,
        y
    }
    line.push(pointObject);
})

canvas.addEventListener("mousemove" , function(e){
    if(isMouseDown){
        if(redoDB.length){
            redoDB = [];
        }
        let x = e.clientX;
        let y = e.clientY - canvasTop ;
        ctx.lineTo(x,y);
        ctx.stroke();
        let pointObject = {
            id : "mm",
            x,
            y
        }
        line.push(pointObject);
    }
})

canvas.addEventListener("mouseup" , function(e){
    isMouseDown = false ;
    db.push(line);
    line = [];
    console.log(db);
})