
const isRight=(a,b,c)=>{
    let [add1, add2, sum] = [a**2,b**2,c**2]
    if(add1+add2===sum||add1+sum===add2||add2+sum===add1){
        return true
    }
    return false;
}

console.log(isRight(5,3,4))

console.log(isRight(2, 2, 4))

const pythago = (a, b, c) => {
    let big = Math.max(a, b, c)
    let small = Math.min(a, b, c)
    console.log(big ** 2 - small ** 2)
    if (big ** 2 - small ** 2 == a ** 2 || big ** 2 - small ** 2 == b ** 2 || big ** 2 - small ** 2 == c ** 2) {
        return true
    }
    else {
        return false
    }
}

console.log(pythago(5,4,3))