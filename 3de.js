function counter (){
    let counter = 0;
    return function(){
        return counter++;
    }
}
const add = counter();
add();
add();
add()

function p2(){
 
    console.log("this is p2 here");
    
}

console.log("this is my practice branch");
