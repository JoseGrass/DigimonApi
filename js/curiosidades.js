document.addEventListener('DOMContentLoaded', () => {
    const curiosidades = {
      "Agumon": "Agumon es uno de los Digimon más emblemáticos. Evoluciona en Greymon y aparece en casi todas las temporadas.",
      "Gabumon": "Gabumon lleva una piel de lobo que en realidad no es parte de su cuerpo, ¡es muy tímido!",
      "Patamon": "Aunque pequeño, su evolución Angemon es uno de los Digimon más poderosos.",
      "Gatomon": "Es uno de los pocos Digimon que comienza en nivel Champion. Su evolución es Angewomon.",
      "Tentomon": "Tiene un acento gracioso y es muy inteligente. Se comunica bien con computadoras."
    };
  
    const curiosidadesList = document.getElementById('curiosidades-list');
  
    for (const [nombre, dato] of Object.entries(curiosidades)) {
      const div = document.createElement('div');
      div.classList.add('curiosidad-card');
      div.innerHTML = `
        <h3>${nombre}</h3>
        <p>${dato}</p>
      `;
      curiosidadesList.appendChild(div);
    }
  });
  