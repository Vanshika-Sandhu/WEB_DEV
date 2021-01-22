//High Order Functions => functions which accept functions as a parameter
//Call back functions => functions which are sent in a function

function getfirstname(fullname){
    //"Steve Rogers " => ["Steve" , Rogers];
    fullname = fullname.split(" ") ;
    return fullname[0];
}

function getlastname(fullname){
    fullname = fullname.split(" ");
    return fullname[1] ;

}

function fun(fullname , cb ){
    let name = cb(fullname) ;
    console.log(name) ;

}

fun( "Steve Rogers" , getfirstname );
fun("Tony Stark" , getlastname ) ;