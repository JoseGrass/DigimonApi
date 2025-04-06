let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

export function toggleFavorito(nombre) {
  if (favoritos.includes(nombre)) {
    favoritos = favoritos.filter(n => n !== nombre);
  } else {
    favoritos.push(nombre);
  }
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

export function esFavorito(nombre) {
  return favoritos.includes(nombre);
}

export function getFavoritos() {
  return favoritos;
}
