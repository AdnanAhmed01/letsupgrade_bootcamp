function counter (){
    let counter = 0;
    return function(){
        return counter++;
    }
}
const add = counter();
console.log(add());
console.log(add());
console.log(add());


