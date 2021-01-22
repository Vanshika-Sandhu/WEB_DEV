//chaining => hell se bachayega

//facts =>
//promisified function se we always get a pending promise !
//then is called immediately on pending promise and callback which is passed inside then is called success callback
//catch is called immediately on pending promise and callback which is passed inside catch is called failure callback
//initial state of promise is <pending>
//then and catch can only be called on pending promise

//then also gives a pending promise called generally as then ka promise


const fs = require("fs");


let f1KaPromise = fs.promises.readFile("./f1.txt");

f1KaPromise.then(function(data){
    console.log(data+"");
    let f2KaPromise = fs.promises.readFile("./f2.txt");
    return f2KaPromise ; 
})
.then(function(data){
    console.log(data+"");
    let f3KaPromise = fs.promises.readFile("./f3.txt");
    return f3KaPromise ;
})
.then(function(data){
    console.log(data+"");
})
