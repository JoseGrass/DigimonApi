// favoritos.js
function agregarAFavoritos(nombre) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (!favoritos.includes(nombre)) {
      favoritos.push(nombre);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      mostrarFavoritos();
    }
  }
  
  function mostrarFavoritos() {
    const favList = document.getElementById("favList");
    if (!favList) return;
  
    favList.innerHTML = "";
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  
    obtenerDigimons(data => {
      const favoritosData = data.filter(d => favoritos.includes(d.name));
      favoritosData.forEach(digimon => {
        const div = document.createElement("div");
        div.className = "digimon-card";
        div.innerHTML = `
          <h3>${digimon.name}</h3>
          <img src="${digimon.img}" alt="${digimon.name}">
          <p>${digimon.level}</p>
          <button onclick="eliminarFavorito('${digimon.name}')">❌</button>
        `;
        favList.appendChild(div);
      });
    });
  }
  
  function eliminarFavorito(nombre) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos = favoritos.filter(n => n !== nombre);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    mostrarFavoritos();
  }
  
  document.addEventListener("DOMContentLoaded", mostrarFavoritos);
  