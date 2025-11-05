// Peliculas.jsx - Con HeroSection
import { useEffect, useMemo, useState } from "react";
import HeroSection from "../components/ui/HeroSection";
import PeliculaCard from "../components/cards/PeliculaCard";
import data from "../data/peliculas.json";
import "../styles/util.css";
import "../styles/MediaPages.css";

export default function Peliculas() {
  // Normaliza los datos del JSON
  const peliculas = (data.peliculas || []).map((p) => ({
    ...p,
    year: p.year ?? p.año, // Usa 'año' si no existe 'year'
  }));

  // ====== Búsqueda y Filtros (TP3) ======
  const [searchText, setSearchText] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("todos");
  const minYear = useMemo(() => Math.min(...peliculas.map((p) => Number(p.year) || 0)), [peliculas]);
  const maxYear = useMemo(() => Math.max(...peliculas.map((p) => Number(p.year) || 0)), [peliculas]);
  const [fromYear, setFromYear] = useState(minYear || 1900);
  const [toYear, setToYear] = useState(maxYear || 2100);

  const genres = useMemo(() => {
    const set = new Set(peliculas.map((p) => (p.genero || "").toString().trim()));
    return ["todos", ...Array.from(set).filter(Boolean).sort()];
  }, [peliculas]);

  const filteredPeliculas = useMemo(() => {
    const text = searchText.trim().toLowerCase();
    return peliculas.filter((p) => {
      const byText = !text
        || p.titulo?.toLowerCase().includes(text)
        || p.director?.toLowerCase().includes(text)
        || p.genero?.toLowerCase().includes(text);
      const byGenre = selectedGenre === "todos" || p.genero === selectedGenre;
      const y = Number(p.year) || 0;
      const byYear = y >= (Number(fromYear) || minYear) && y <= (Number(toYear) || maxYear);
      return byText && byGenre && byYear;
    });
  }, [peliculas, searchText, selectedGenre, fromYear, toYear, minYear, maxYear]);

  const resetFilters = () => {
    setSearchText("");
    setSelectedGenre("todos");
    setFromYear(minYear);
    setToYear(maxYear);
  };

  // ====== Lightbox (TP3) ======
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const openLightboxAt = (index) => {
    setCurrentIndex(index);
    setZoom(1);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const showPrev = () => setCurrentIndex((i) => (i - 1 + filteredPeliculas.length) % filteredPeliculas.length);
  const showNext = () => setCurrentIndex((i) => (i + 1) % filteredPeliculas.length);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, filteredPeliculas.length]);

  return (
    <div className="media-page fade-in">
      <HeroSection
  title="🎬 Catálogo de Películas"
  subtitle="Datos obtenidos desde un archivo local JSON"
  accentColor="#00d4ff"
/>

      <section className="media-listado card">
        {/* Controles de búsqueda y filtros */
        }
        <div className="search-container">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Buscar por título, director o género..."
            className="search-input"
          />

          <select
            className="search-input"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            aria-label="Filtrar por género"
          >
            {genres.map((g) => (
              <option key={g} value={g}>{g === "todos" ? "Todos los géneros" : g}</option>
            ))}
          </select>

          <div className="year-range" style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <input
              type="number"
              className="search-input"
              style={{ maxWidth: 120 }}
              value={fromYear}
              min={minYear}
              max={toYear}
              onChange={(e) => setFromYear(e.target.value)}
              placeholder="Desde"
            />
            <span>—</span>
            <input
              type="number"
              className="search-input"
              style={{ maxWidth: 120 }}
              value={toYear}
              min={fromYear}
              max={maxYear}
              onChange={(e) => setToYear(e.target.value)}
              placeholder="Hasta"
            />
          </div>

          <button onClick={resetFilters} className="btn-outline">Reiniciar</button>
        </div>

        <h2>Listado dinámico</h2>
        <p className="api-indicator">
          {filteredPeliculas.length} de {peliculas.length} películas
        </p>

        <div className="grid-media">
          {filteredPeliculas.map((peli, idx) => (
            <PeliculaCard
              key={peli.id || peli.titulo}
              poster={peli.poster}
              titulo={peli.titulo}
              year={peli.year}
              genero={peli.genero}
              director={peli.director}
              duracion={peli.duracion}
              rating={peli.rating}
              url={peli.url}
              onOpen={() => openLightboxAt(idx)}
            />
          ))}
        </div>

        {lightboxOpen && filteredPeliculas[currentIndex] && (
          <div
            className="lightbox-overlay"
            onClick={closeLightbox}
            style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
              overflow: 'auto', padding: '2rem'
            }}
          >
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative', width: '100%', maxWidth: '90vw',
                display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'
              }}
            >
              {/* Barra superior fija con título y cerrar */}
              <div style={{
                position: 'sticky', top: 0, width: '100%', zIndex: 10,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                background: 'rgba(0,0,0,0.7)', padding: '0.75rem 1rem', borderRadius: '8px',
                marginBottom: '1rem'
              }}>
                <div style={{ color: '#fff', textAlign: 'center', flex: 1 }}>
                  <strong>{filteredPeliculas[currentIndex].titulo}</strong>
                  {filteredPeliculas[currentIndex].year ? ` • ${filteredPeliculas[currentIndex].year}` : ''}
                </div>
                <button className="btn-outline" onClick={closeLightbox} style={{ marginLeft: '1rem' }}>
                  ✕ Cerrar (ESC)
                </button>
              </div>

              {/* Contenedor de imagen con scroll */}
              <div style={{
                position: 'relative', width: '100%', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                minHeight: '400px', maxHeight: '70vh', overflow: 'auto'
              }}>
                {/* Botón anterior - fijo a la izquierda */}
                <button
                  className="btn-outline"
                  onClick={showPrev}
                  style={{
                    position: 'absolute', left: '1rem', zIndex: 5,
                    background: 'rgba(0,0,0,0.8)', border: '2px solid #fff',
                    padding: '0.75rem', borderRadius: '50%', cursor: 'pointer'
                  }}
                >
                  ◀️
                </button>

                {/* Imagen con zoom */}
                <img
                  src={filteredPeliculas[currentIndex].poster}
                  alt={filteredPeliculas[currentIndex].titulo}
                  style={{
                    maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain',
                    transform: `scale(${zoom})`, transition: 'transform 200ms ease',
                    cursor: zoom > 1 ? 'move' : 'default'
                  }}
                />

                {/* Botón siguiente - fijo a la derecha */}
                <button
                  className="btn-outline"
                  onClick={showNext}
                  style={{
                    position: 'absolute', right: '1rem', zIndex: 5,
                    background: 'rgba(0,0,0,0.8)', border: '2px solid #fff',
                    padding: '0.75rem', borderRadius: '50%', cursor: 'pointer'
                  }}
                >
                  ▶️
                </button>
              </div>

              {/* Barra inferior fija con controles de zoom */}
              <div style={{
                position: 'sticky', bottom: 0, width: '100%', zIndex: 10,
                display: 'flex', gap: '0.75rem', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(0,0,0,0.7)', padding: '0.75rem 1rem', borderRadius: '8px',
                flexWrap: 'wrap'
              }}>
                <button
                  className="btn-outline"
                  onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
                >
                  − Zoom
                </button>
                <span style={{ color: '#fff', minWidth: '60px', textAlign: 'center' }}>
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  className="btn-outline"
                  onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
                >
                  + Zoom
                </button>
                <button
                  className="btn-outline"
                  onClick={() => setZoom(1)}
                  style={{ marginLeft: '0.5rem' }}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}




