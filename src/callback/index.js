function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2,);
}

console.log(calc(2,2,sum));



setTimeout(()=>{
    console.log("Hola js")
},2000)

function saludo(name) {
    console.log(`hola ${name}`);
}
setTimeout(saludo,2000,'samuel');
