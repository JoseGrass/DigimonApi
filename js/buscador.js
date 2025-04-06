// buscador.js
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");
  
    if (searchInput && searchResults) {
      searchInput.addEventListener("input", () => {
        const searchText = searchInput.value.toLowerCase();
        obtenerDigimons(data => {
          const resultados = data.filter(d => d.name.toLowerCase().includes(searchText));
          mostrarResultados(resultados, searchResults);
        });
      });
    }
  
    function mostrarResultados(lista, contenedor) {
      contenedor.innerHTML = "";
      lista.forEach(digimon => {
        const card = crearCard(digimon);
        contenedor.appendChild(card);
      });
    }
  
    function crearCard(digimon) {
      const div = document.createElement("div");
      div.className = "digimon-card";
      div.innerHTML = `
        <h3>${digimon.name}</h3>
        <img src="${digimon.img}" alt="${digimon.name}">
        <p>${digimon.level}</p>
        <button onclick="agregarAFavoritos('${digimon.name}')">❤️</button>
      `;
      return div;
    }
  });
  