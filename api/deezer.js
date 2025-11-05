// api/deezer.js
export default async function handler(request, response) {
  try {
    const { artist, page = 1, limit = 10 } = request.query;
    let url;
    if (artist) {
      url = `https://api.deezer.com/search/artist?q=${encodeURIComponent(artist)}`;
    } else {
      const pageNum = Math.max(1, parseInt(page, 10) || 1);
      const lim = Math.min(50, Math.max(1, parseInt(limit, 10) || 10));
      const index = (pageNum - 1) * lim;
      url = `https://api.deezer.com/chart/0/tracks?index=${index}&limit=${lim}`;
    }

    const res = await fetch(url);
    if (!res.ok) throw new Error("Error en la solicitud a la API de Deezer");

    const data = await res.json();
    response.status(200).json(data);
  } catch (error) {
    console.error("Error al obtener datos de Deezer:", error);
    response.status(500).json({ error: "Error al obtener los datos de Deezer" });
  }
}
