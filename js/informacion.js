function mostrarInformacion() {
    const app = document.getElementById("app");
    app.innerHTML = ""; // Limpiar antes de mostrar

    // Crear contenedor principal
    const tarjetaInformacion = document.createElement("div");
    tarjetaInformacion.classList.add("informacion");

    // Crear overlay
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Crear contenedor de contenido
    const contenido = document.createElement("div");
    contenido.classList.add("contenido");

    // Crear y agregar el título
    const titulo = document.createElement("h2");
    titulo.textContent = "DIGIMON API";
    contenido.appendChild(titulo);

    // Crear y agregar el subtítulo
    const subtitulo = document.createElement("h3");
    subtitulo.textContent = "Jose Luis Grass Murillo";
    contenido.appendChild(subtitulo);

    // Crear y agregar la imagen
    const imagen = document.createElement("img");
    imagen.classList.add("contenido-img");
    imagen.src = "https://s0.smartresize.com/wallpaper/533/654/HD-wallpaper-angemo-angemon-digimon-patamon.jpg";
    imagen.alt = "digimon";
    contenido.appendChild(imagen);

    // Crear y agregar el párrafo
    const descripcion = document.createElement("p");
    descripcion.classList.add("caja-azul");
    descripcion.textContent = "API con información de 239 digimones";
    contenido.appendChild(descripcion);

    // Crear y agregar el enlace
    const enlace = document.createElement("a");
    enlace.href = "https://github.com/JoseGrass/DigimonApi";
    enlace.target = "_blank";
    const textoEnlace = document.createElement("p");
    textoEnlace.classList.add("link");
    textoEnlace.textContent = "github.com/JoseGrass/DigimonApi";
    enlace.appendChild(textoEnlace);
    contenido.appendChild(enlace);

    // Agregar overlay y contenido al contenedor principal
    tarjetaInformacion.appendChild(overlay);
    tarjetaInformacion.appendChild(contenido);

    // Agregar el contenedor principal al DOM
    app.appendChild(tarjetaInformacion);
}
