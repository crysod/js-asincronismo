function sum(num1, num2) {
    return  num1+ num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

//************************************************************************************************************

setTimeout(function(){
    console.log('Hello JS');
}, 2000)

//************************************************************************************************************** */ */

function gretting(name){
    console.log(`hello ${name}`);
}

setTimeout(gretting, 2000, 'Cristian');