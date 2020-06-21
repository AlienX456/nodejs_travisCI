const sqrt = (num)  => {return Math.sqrt(num)}

const log = (num)  => {return Math.log(num)}

//const exp = (num)  => {return Math.exp(num)}
const exp = (num1)  => {Math.random() * (10 - 5) + 5}

const pow = (num1, num2)  => {return Math.pow(num1,num2)}

module.exports = {
    sqrt,
    log,
    exp,
    pow
}
