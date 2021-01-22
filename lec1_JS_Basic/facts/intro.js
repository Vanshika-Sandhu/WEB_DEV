console.log("Hello World");
//data types => Number, Boolean, String, undefined, null, object

//ES6 syntax => ECMA SCRIPT 6 => specification which define language how it should be written

// variable definition using => let, const

//let => block scoped , reassignment 

//let examples
let a = 25 ;
console.log(a) ;
a = 30 ;
console.log(a) ;

if(true){
    let b = 30 ;
    //b can only be accessed within this block
}

//console.log(b);
//console.log(a);

let b = "Hey I am string !!" ;
let c = true ;
let d = undefined ;
let e ;
console.log(e) ; // this will give undefined


//const keyword => constant , block scoped , reassignment is not possible

const pi = 3.14 ;
//pi = 50 will give error ; NOT ALLOWED 
console.log(pi) ;

//object are keyy value pairs
//keys => should be uniques (written on left side(name skills etc)), can be written as string as well so that space can be used b/w the words;   
//values => need not to be unique
let obj = {
    name : "Steve Rogers" ,
    "skills" : "Martial Arts" ,
    movies : "Winter Soldier" ,
    "key" : "something" ,     // string key can never be accessed using dot notation
    "BEST FRIEND" : "BUCKY BARNES" ,
    age : 50 
}

console.log(obj.age + 40);


//object to access

//dot notation => literal check

let name  = obj.name ;
console.log(name) ;
console.log(obj.skills) ;
console.log(obj.movies) ;
let key = "skills" ;
console.log( obj.key ) ; // this will give the output something or if the "key" is not in the object, then will give the output as undefined

// bracket notation
console.log(   obj[key]  ); // will find a key named as skills
let bestie = "BEST FRIEND" ;
console.log( obj[bestie] ) ;
console.log( obj["BEST FRIEND"]) ;

//arrays
let movies = [ "winter soldier" , "iron man 2" , " age of ultron" , 1235 , 234 , 1837 ,{
    name : "Steve Rogers" ,
    skills : "Martial Arts" ,
    movies : "Winter Soldier" ,
    key : "something" ,  
    "BEST FRIEND" : "BUCKY BARNES"
} , true, false, {name : "kuch bhi" , values : ["martial arts" , "taekwando" , " boxing" ] } , [ 1,2,3,4,5] ] ;

//push , pop , shift , unshift , slice , spice ,

console.log( movies[9].values[1] ) ;

// == and ===
//== only value chack and data type se koi matlab nahi 
// === se value and datatype both get checked
console.log( 12 == "12" ) ;
console.log( 12 === "12") ;


