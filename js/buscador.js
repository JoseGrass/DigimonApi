export function setupBuscador(inputId, data, renderFn) {
    const input = document.getElementById(inputId);
  
    input.addEventListener('input', () => {
      const valor = input.value.toLowerCase();
      const filtrado = data.filter(d => d.name.toLowerCase().includes(valor));
      renderFn(filtrado);
    });
  }
  