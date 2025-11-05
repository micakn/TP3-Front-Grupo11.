// src/pages/Integrantes.jsx - Página que muestra los integrantes del equipo
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/ui/HeroSection";
import "./Integrantes.css";

// Componente de barra de progreso animada (TP3)
function SkillBar({ skill, level, color = "#F8B55F" }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="skill-bar-container">
      <div className="skill-bar-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar-wrapper">
        <div
          className="skill-bar-fill"
          style={{
            width: animated ? `${level}%` : '0%',
            backgroundColor: color,
            transition: 'width 1s ease-out',
          }}
        />
      </div>
    </div>
  );
}

export default function Integrantes() {
  const integrantes = [
    {
      nombre: "Paula",
      edad: 32,
      ubicacion: "Berazategui, Buenos Aires",
      rol: "Full Stack Developer",
      avatar: "/img/card-Paula.webp",
      descripcion:
        "Apasionada por la tecnología y el desarrollo web. Especializada en HTML, CSS, PHP y JavaScript.",
      habilidades: [
        { nombre: "HTML", nivel: 90 },
        { nombre: "CSS", nivel: 85 },
        { nombre: "PHP", nivel: 80 },
        { nombre: "JavaScript", nivel: 75 },
      ],
      ruta: "/paula",
      color: "#F8B55F",
    },
    {
      nombre: "Micaela",
      edad: 31,
      ubicacion: "Buenos Aires, Argentina",
      rol: "Frontend Developer & Design Enthusiast",
      avatar: "/img/card-Micaela.webp",
      descripcion:
        "Creativa y detallista, combina diseño y programación. Aficionada a la impresión 3D y el café.",
      habilidades: [
        { nombre: "Impresión 3D", nivel: 95 },
        { nombre: "Diseño Creativo", nivel: 90 },
        { nombre: "Programación", nivel: 75 },
        { nombre: "React", nivel: 70 },
      ],
      ruta: "/micaela",
      color: "#F8B55F",
    },
    {
      nombre: "María",
      edad: 44,
      ubicacion: "Córdoba, Argentina",
      rol: "Creative Designer & Project Manager",
      avatar: "/img/card-Maria.webp",
      descripcion:
        "Organizada y comunicativa, combina su experiencia en gestión de proyectos con una visión artística que da identidad y equilibrio al equipo.",
      habilidades: [
        { nombre: "Organización", nivel: 95 },
        { nombre: "Trabajo en equipo", nivel: 90 },
        { nombre: "Resolución de problemas", nivel: 85 },
        { nombre: "Comunicación", nivel: 92 },
      ],
      ruta: "/maria",
      color: "#F8B55F",
    },
  ];

  return (
    <div className="integrantes" style={{ '--section-color': '#ff8c00' }}>
      <HeroSection
        title="Nuestro Equipo"
        subtitle="Conocé a las integrantes del Grupo 11"
        accentColor="#ff8c00"
      />

      <section className="equipo-actual">
        <h2>Integrantes Activos</h2>
        <div className="integrantes-grid">
          {integrantes.map((i, index) => (
            <Link
              key={index}
              to={i.ruta}
              className="integrante-card"
              style={{ "--color-principal": i.color }}
            >
              <div className="integrante-avatar">
                <img src={i.avatar} alt={`${i.nombre} Avatar`} />
                <div className="avatar-overlay">
                  <span>Ver Portal</span>
                </div>
              </div>

              <div className="integrante-info">
                <h3>{i.nombre}</h3>
                <p className="rol">{i.rol}</p>
                <p className="ubicacion">📍 {i.ubicacion}</p>
                <p className="descripcion">{i.descripcion}</p>

                <div className="especialidades">
                  <h4>Habilidades:</h4>
                  <div className="habilidades-bars">
                    {i.habilidades.map((hab, j) => (
                      <SkillBar
                        key={j}
                        skill={hab.nombre}
                        level={hab.nivel}
                        color={i.color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="nota-cambios">
        <div className="nota-box">
          <h3>📝 Nota sobre el Equipo</h3>
          <p>
            Para este TP2, el equipo está conformado por <strong>Paula</strong>, <strong>Micaela</strong> y <strong>María</strong>.
            Cada integrante mantiene su propio portal individual con un estilo y personalidad únicos,
            reflejando la diversidad creativa del grupo y su compromiso con el desarrollo colaborativo.
          </p>
          <p>
            Las secciones individuales incluyen información sobre habilidades, películas y música favoritas,
            con un enfoque en el diseño personalizado y la integración dinámica de datos para fortalecer la práctica en React.
          </p>
        </div>
      </section>
    </div>
  );
}