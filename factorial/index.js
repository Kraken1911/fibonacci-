//por hernandez cervantes derek ivan
// Función para calcular el factorial de un número de manera recursiva
function calcularFactorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calcularFactorial(n - 1);
    }
  }
  
  // Número para el cual deseas calcular el factorial
  const numero = 5; // Cambia esto al número que desees
  
  // Calcula el factorial y muestra el resultado
  const factorial = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${factorial}`);
  