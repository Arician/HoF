// activity1


const hello=()=>{
    console.log("Hello Code Nation")
}
const loop=(e,fn)=>{
    for(let i=0;i<e;i++){
        fn()
    }
}
loop(5,hello)

// activity2

const list=[7, 21, 82, 4, 817]
const biggerList=list.map(x=>x*3)
console.log(biggerList)
// doing this in week1 helped

// activity3

const add = (a,b) => {
        return a+b;
    }
const subtract = (a,b) => {
    return a - b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}
const doMaths = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2);
    }
}
console.log(doMaths(3)(4,add))