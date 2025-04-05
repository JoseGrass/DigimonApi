document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.getElementById("splash").style.display = "none";
    }, 2000);
  
    cargarDigimons();
    document.getElementById("buscador").addEventListener("input", buscarDigimon);
    document.getElementById("nivel-filtro").addEventListener("change", filtrarDigimon);
  });
  
  function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(seccion => seccion.classList.remove('activa'));
    document.getElementById(id).classList.add('activa');
  }
  
  async function cargarDigimons() {
    const res = await fetch("https://digimon-api.vercel.app/api/digimon");
    const data = await res.json();
    const contenedor = document.getElementById("digimon-lista");
    contenedor.innerHTML = "";
    data.slice(0, 50).forEach(d => {
      contenedor.appendChild(crearCard(d));
    });
  }
  
  function crearCard(digimon) {
    const card = document.createElement("div");
    card.className = "digimon-card";
    card.innerHTML = `
      <h3>${digimon.name}</h3>
      <img src="${digimon.img}" alt="${digimon.name}" width="100" />
      <p>${digimon.level}</p>
      <button onclick="guardarFavorito('${digimon.name}', '${digimon.img}', '${digimon.level}')">⭐ Favorito</button>
    `;
    return card;
  }
  
  function buscarDigimon(e) {
    const nombre = e.target.value.toLowerCase();
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then(res => res.json())
      .then(data => {
        const resultados = data.filter(d => d.name.toLowerCase().includes(nombre));
        const cont = document.getElementById("resultado-busqueda");
        cont.innerHTML = "";
        resultados.forEach(d => cont.appendChild(crearCard(d)));
      });
  }
  
  function filtrarDigimon() {
    const nivel = document.getElementById("nivel-filtro").value;
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then(res => res.json())
      .then(data => {
        const filtrados = data.filter(d => d.level === nivel);
        const cont = document.getElementById("resultado-filtro");
        cont.innerHTML = "";
        filtrados.forEach(d => cont.appendChild(crearCard(d)));
      });
  }
  
  function guardarFavorito(nombre, img, level) {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (!favoritos.find(f => f.name === nombre)) {
      favoritos.push({ name: nombre, img, level });
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      mostrarFavoritos();
    }
  }
  
  function mostrarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const cont = document.getElementById("lista-favoritos");
    cont.innerHTML = "";
    favoritos.forEach(d => {
      const card = document.createElement("div");
      card.className = "digimon-card";
      card.innerHTML = `
        <h3>${d.name}</h3>
        <img src="${d.img}" width="100" />
        <p>${d.level}</p>
        <button onclick="eliminarFavorito('${d.name}')">❌ Quitar</button>
      `;
      cont.appendChild(card);
    });
  }
  
  function eliminarFavorito(nombre) {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos = favoritos.filter(f => f.name !== nombre);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    mostrarFavoritos();
  }
  