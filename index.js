function fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const secuencia = [0, 1];
      for (let i = 2; i < n; i++) {
        const siguienteNumero = secuencia[i - 1] + secuencia[i - 2];
        secuencia.push(siguienteNumero);
      }
      return secuencia;
    }
  }
  
  const n = 10; // Cambia este valor a la cantidad de números de Fibonacci que deseas generar
  const resultado = fibonacci(n);
  console.log(resultado);
  