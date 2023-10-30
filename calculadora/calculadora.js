const operation = prompt('introduce la operacion');
const separateNumbers = (signo) => {
        const num1 = Number(operation.split(signo)[0]);
        const num2 = Number(operation.split(signo)[1]);
        return {
                num1,
                num2
        }
}

const showResult = (resultado) => {
        if(isNaN(resultado)) {
                alert ('Datos invalidos');
        } else {
                alert (`El resultado es ${resultado}`);
        }
}

//Saber que signo hay en el string inculdes()
//Separarlos con la funcion separateNumbers usando split()
//El string se convierte a numero al momento de escribirlo gracias a Numbre(prompt...)
//El resultado se muestra con la funcion de showResult que se crea

if (operation.includes('+')) {
        const { num1, num2 } = separateNumbers('+');
        showResult(num1 + num2);
} else if (operation.includes('-')) {
        const { num1, num2 } = separateNumbers('-');
        showResult(num1 - num2);
} else if (operation.includes('x')) {
        const { num1, num2 } = separateNumbers('x');
        showResult(num1 * num2);
} else if (operation.includes('/')) {
        const { num1, num2 } = separateNumbers('/');
        showResult(num1 / num2);
} else {
        alert ('no es una operacion');
}