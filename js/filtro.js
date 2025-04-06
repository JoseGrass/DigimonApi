// filtro.js
document.addEventListener("DOMContentLoaded", function () {
    const nivelFiltro = document.getElementById("nivelFiltro");
    const filteredResults = document.getElementById("filteredResults");
  
    if (nivelFiltro && filteredResults) {
      nivelFiltro.addEventListener("change", () => {
        const nivel = nivelFiltro.value;
        obtenerDigimons(data => {
          const filtrados = nivel ? data.filter(d => d.level.toLowerCase() === nivel.toLowerCase()) : data;
          mostrarFiltrados(filtrados);
        });
      });
    }
  
    function mostrarFiltrados(lista) {
      filteredResults.innerHTML = "";
      lista.forEach(digimon => {
        const card = document.createElement("div");
        card.className = "digimon-card";
        card.innerHTML = `
          <h3>${digimon.name}</h3>
          <img src="${digimon.img}" alt="${digimon.name}">
          <p>${digimon.level}</p>
          <button onclick="agregarAFavoritos('${digimon.name}')">❤️</button>
        `;
        filteredResults.appendChild(card);
      });
    }
  });
  