function mostrarInformacion(){
    const app = document.getElementById("app");
    app.innerHTML = ""; // Limpiar antes de mostrar

    const tarjetaInformacion = document.createElement("div");
    tarjetaInformacion.classList.add("informacion");

    tarjetaInformacion.innerHTML = `
        <div class="overlay"></div>
        <div class="contenido">
            <h2>DIGIMON API</h2>
            <h3>Jose Luis Grass Murillo</h3>
            
            <p class="caja-azul">API con información de 239 digimones</p>

        </div>
    `;

    app.appendChild(tarjetaInformacion);
}

window.onload = function () {
    mostrarInformacion();
  };
  