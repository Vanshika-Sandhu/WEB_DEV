// public static nahi hota 
//function body 
function sayHii(name , fn){
    fn() ;
    console.log(name + " says Hii !!") ;
    return 10 ;
}

function fun(){
    console.log("I am fun");
}


//function call
//sayHii() ;   // gives output
//console.log( sayHii ) ; //gives output
//console.log( sayHii() ) ; // returnes undefined when no return value was declared or else now 10
//let val = sayHii() ;
//console.log( val ) ; // same output as console.log( sayHii() ) ;

let val = sayHii("Steve" , fun) ;
console.log(val) ; 
// in javascript, functions are variables
// variables may be passed as a perimeter
//so, functions can also be passed as a parameter