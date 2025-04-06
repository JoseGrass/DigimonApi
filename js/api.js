// Llama a la API de Digimon y devuelve la lista de Digimon
export async function fetchDigimons() {
    try {
      const res = await fetch('https://digimon-api.vercel.app/api/digimon');
      const data = await res.json();
      return data;
    } catch (err) {
      console.error("Error al obtener los Digimon:", err);
      return [];
    }
  }
  