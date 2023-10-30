const num1 = '5';
const num2 = '8';

let numeros = [num1, num2];

let intentosNum1 = 2;
let intentosNum2 = 4;
let num1Ing = '';
let num2Ing = '';

console.log(num1);
console.log(num2);

while (intentosNum2 > 0 && num1Ing !== num1 && num2Ing !== num2) {
    if (intentosNum1 === 0 && intentosNum2 > 0) {
        alert (`Se acabaron los intentos para numero 1, te quedan ${intentosNum2} intentos para el numero 2`);
        num2Ing = prompt('Introduce numero 2');
        intentosNum2 = intentosNum2 - 1;
    } else {
        alert (`Tienes ${intentosNum1} intentos para numero 1 y ${intentosNum2} intentos para numero 2`);
        num1Ing = prompt('Introduce numero 1');
        num2Ing = prompt('Ingresa numero 2');
        intentosNum1 = intentosNum1 - 1;
        intentosNum2 = intentosNum2 - 1;
    }
}