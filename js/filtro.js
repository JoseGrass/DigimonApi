export function setupFiltro(selectId, data, renderFn) {
    const select = document.getElementById(selectId);
    const niveles = [...new Set(data.map(d => d.level))];
  
    select.innerHTML = `<option value="">Todos</option>`;
    niveles.forEach(n => {
      select.innerHTML += `<option value="${n}">${n}</option>`;
    });
  
    select.addEventListener('change', () => {
      const nivel = select.value;
      const filtrado = nivel ? data.filter(d => d.level === nivel) : data;
      renderFn(filtrado);
    });
  }
  