// api.js
function obtenerDigimons(callback) {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.error("Error al obtener Digimons:", error));
  }
  