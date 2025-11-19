//INPUT
console.log("funciona en html");
let num1 = parseFloat(prompt("Ingresa el primer número:", "Número entero"));
let num2 = parseFloat(prompt("Ingresa el segundo número:", "Número entero, diferente de cero"));
let operacion = prompt("Ingresa el símbolo de la operación", "+, -, *, / o all");
//Proceso
function sumar(a, b){
    let resultado = a + b;
    return resultado;
}

function restar(a, b){
    let resultado = a - b;
    return resultado;
}

function multiplicar(a, b){
    let resultado = a * b;
    return resultado;
}

function dividir(a, b){
  if(b == 0){
    return "No se puede dividir entre cero";
  }
    let resultado = a / b;
    return resultado;
}

function calculadora(num1, num2, operacion){

    switch (operacion) {
        case "+":
            return sumar(num1, num2);
        case "-":
            return restar(num1, num2);
        case "*":
            return multiplicar(num1, num2);
        case "/":
            return dividir(num1, num2);
        case "all":
            return {
                suma: sumar(num1, num2),
                resta: restar(num1, num2),
                multi: multiplicar(num1, num2),
                div: dividir(num1, num2)
            };

        default:
            return "Operación no válida";
    }
}

//OUTPUT
let resultado = calculadora(num1, num2, operacion);

if (operacion === "all") {
    let mensaje = 
        "Suma: " + resultado.suma + "\n" +
        "Resta: " + resultado.resta + "\n" +
        "Multiplicación: " + resultado.multi + "\n" +
        "División: " + resultado.div;

    console.log(mensaje);
    alert(mensaje);
} else {
    console.log("El resultado es: " + resultado);
    alert("El resultado es: " + resultado);
}


