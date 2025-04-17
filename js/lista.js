// Función para mostrar la lista de Digimones
function mostrarLista(digimones) {
  const app = document.getElementById("app");
  
  digimones.forEach(digimon => {
    const card = document.createElement("div");
    card.classList.add("digimon-card");

    card.innerHTML = `
      <h2 class="digimon-name">${digimon.name}</h2> 
      <img class="digimon-img" src="${digimon.img}" alt="${digimon.name}">
      <p class="digimon-level">Nivel: ${digimon.level}</p>
      <button onclick="Favoritos()" class="digimon-favorito">❤️</button>
       
    `;

    app.appendChild(card);
  });
}

  