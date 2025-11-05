// src/pages/Bitacora.jsx - Reutiliza util.css al máximo
import HeroSection from "../components/ui/HeroSection";
import TimelineItem from '../components/TimelineItem';
import './Bitacora.css';

export default function Bitacora() {
  const eventos = [
    { 
      fecha: "01/09/25", 
      titulo: "Inicio del TP1", 
      descripcion: "Primera reunión del equipo. Definición de roles, distribución de tareas y elección del concepto 'multiverso digital' donde cada integrante tendría su propio estilo visual único."
    },
    { 
      fecha: "05/09/25", 
      titulo: "Diseño y Estructura", 
      descripcion: "Creación de wireframes iniciales y definición de la paleta de colores base. Decisión de usar HTML/CSS/JS puro para el TP1 con enfoque en responsive design desde el inicio."
    },
    { 
      fecha: "12/09/25", 
      titulo: "Desarrollo HTML/CSS", 
      descripcion: "Implementación de las páginas principales con estilos personalizados por integrante. Cada portal individual comenzó a tomar forma con su identidad visual propia manteniendo coherencia en la navegación."
    },
    { 
      fecha: "18/09/25", 
      titulo: "Funcionalidad JavaScript", 
      descripcion: "Agregado de interactividad: efectos de scroll, carruseles de imágenes automáticos, animaciones de texto y validación de formularios. Optimización de rendimiento y testing cross-browser."
    },
    { 
      fecha: "20/09/25", 
      titulo: "Entrega TP1", 
      descripcion: "Finalización del sitio estático con 5 páginas HTML individuales. Deploy en Vercel y documentación completa en GitHub. Retrospectiva del equipo identificando áreas de mejora para el TP2."
    },
    { 
      fecha: "22/09/25", 
      titulo: "Lanzamiento TP2", 
      descripcion: "Inicio del segundo trabajo práctico con el desafío de migrar todo el sitio estático a React. Estudio de la arquitectura SPA y planificación de la componentización necesaria."
    },
    { 
      fecha: "25/09/25", 
      titulo: "Setup React con Vite", 
      descripcion: "Configuración del proyecto React desde cero utilizando Vite como build tool. Instalación de dependencias principales: React Router DOM, creación de la estructura de carpetas y configuración de ESLint."
    },
    { 
      fecha: "02/10/25", 
      titulo: "Migración de Contenido", 
      descripcion: "Traslado progresivo del contenido HTML a componentes JSX. Conversión de las páginas estáticas en componentes React funcionales manteniendo los estilos originales pero adaptados a CSS modules."
    },
    { 
      fecha: "05/10/25", 
      titulo: "Componentización", 
      descripcion: "Creación de componentes reutilizables: Sidebar, TimelineItem, PeliculaCard, MusicaCard. Implementación del componente PortalBase para unificar la lógica de los portales individuales y reducir código duplicado en un 80%."
    },
    { 
      fecha: "10/10/25", 
      titulo: "React Router Implementado", 
      descripcion: "Configuración completa de rutas con React Router DOM 6. Navegación SPA funcional sin recargas de página. Implementación de NavLink para indicadores visuales de ruta activa en la sidebar."
    },
    { 
      fecha: "12/10/25", 
      titulo: "Integración de APIs", 
      descripcion: "Lectura dinámica del archivo JSON local con 20+ películas. Integración exitosa con Deezer API para música en tiempo real. Implementación de estados de carga, manejo de errores y función proxy serverless en Vercel."
    },
    { 
      fecha: "15/10/25", 
      titulo: "Responsive Avanzado", 
      descripcion: "Refinamiento del diseño responsive con tres breakpoints específicos (480px, 768px, 1024px). Sidebar hamburguesa funcional en móviles con overlay. Testing exhaustivo en diferentes dispositivos y navegadores."
    },
    { 
      fecha: "18/10/25", 
      titulo: "Optimizaciones Finales", 
      descripcion: "Consolidación de estilos CSS en archivos modulares (variables.css, util.css, themes.css). Eliminación de código duplicado. Implementación de lazy loading en imágenes y optimización de performance con Lighthouse."
    },
    { 
      fecha: "19/10/25", 
      titulo: "Diagramas y Documentación", 
      descripcion: "Creación de diagramas visuales: árbol de renderizado de componentes React y estructura de carpetas del proyecto. Actualización completa del README.md con badges, instrucciones de instalación y documentación técnica detallada."
    },
    { 
      fecha: "20/10/25", 
      titulo: "Reproductor de Música", 
      descripcion: "Implementación de sistema de reproducción de música con iTunes API. Player global flotante con controles de reproducción, barra de progreso interactiva y búsqueda en tiempo real. Componentes modularizados siguiendo la arquitectura del proyecto."
    },
        { 
      fecha: "22/10/25", 
      titulo: "Entrega Final TP2", 
      descripcion: "Deploy exitoso en Vercel con todas las funcionalidades operativas incluyendo reproductor de música funcional. Repositorio GitHub actualizado con commits organizados. Proyecto completo cumpliendo 100% de las consignas: SPA funcional, 2 APIs integradas (Deezer + iTunes), responsive, diagramas incluidos, reproductor global."
    },
    { 
      fecha: "20/10/25", 
      titulo: "Lanzamiento TP3", 
      descripcion: "Inicio del tercer trabajo práctico con el objetivo de implementar 5 mejoras obligatorias que mejoren la UX, funcionalidad e interactividad. Revisión de consignas y planificación de las mejoras: animaciones suaves, búsqueda/filtrado, paginación, lightbox y barras de progreso."
    },
    { 
      fecha: "23/10/25", 
      titulo: "Implementación de Animaciones Suaves", 
      descripcion: "Agregado de animaciones escalonadas para tarjetas (slideInUp con delays), efectos hover mejorados con transform scale y translateY, y transiciones suaves entre páginas. Uso de cubic-bezier para curvas naturales. Implementado en util.css con animaciones reutilizables."
    },
    { 
      fecha: "25/10/25", 
      titulo: "Sistema de Búsqueda y Filtrado en Películas", 
      descripcion: "Implementación de búsqueda por texto (título, director, género) en tiempo real, filtro por género con dropdown dinámico, y filtro por rango de años. Uso de useMemo para optimizar el rendimiento del filtrado. Contador dinámico 'X de Y películas' y botón de reinicio."
    },
    { 
      fecha: "27/10/25", 
      titulo: "Paginación para API Externa (Deezer)", 
      descripcion: "Implementación de paginación completa en la página de Deezer con botones Anterior/Siguiente, indicador de página actual, y deshabilitación inteligente de botones. Actualización del backend (api/deezer.js) para soportar parámetros page y limit. Cálculo automático del index para la API."
    },
    { 
      fecha: "29/10/25", 
      titulo: "Lightbox Interactivo para Imágenes", 
      descripcion: "Desarrollo de lightbox completo con navegación entre imágenes, controles de zoom (0.5x a 3x), botón reset, múltiples formas de cierre (ESC, click fuera, botón), navegación por teclado con flechas, y controles fijos que no se ocultan durante el zoom. Implementado con position fixed y sticky."
    },
    { 
      fecha: "01/11/25", 
      titulo: "Barras de Progreso de Habilidades", 
      descripcion: "Creación del componente SkillBar con animación de llenado desde 0% hasta el nivel objetivo. Efecto shimmer animado, diseño responsive, y datos por integrante con porcentajes específicos. Implementado en la página de Integrantes reemplazando los tags estáticos anteriores."
    },
    { 
      fecha: "05/11/25", 
      titulo: "Optimización y Refinamiento", 
      descripcion: "Ajustes finales de rendimiento, corrección de bugs en lightbox (controles que se ocultaban con zoom), mejora de animaciones responsive, y optimización de las barras de progreso. Testing exhaustivo en diferentes dispositivos y navegadores."
    },
    { 
      fecha: "08/11/25", 
      titulo: "Documentación y Capturas", 
      descripcion: "Actualización completa del README.md con documentación detallada de las 5 mejoras, espacios para capturas de pantalla 'Antes' y 'Después', y actualización de la bitácora con todos los eventos del TP3. Preparación de capturas de pantalla para evidenciar cada mejora implementada."
    },
    { 
      fecha: "10/11/25", 
      titulo: "Entrega Final TP3", 
      descripcion: "Deploy final en Vercel con todas las mejoras operativas. README actualizado con documentación completa y capturas de pantalla. Repositorio GitHub con commits organizados. Proyecto completo cumpliendo 100% de las consignas del TP3: 5 mejoras implementadas, documentadas y con evidencia visual."
    }
  ];

   return (
    <div className="bitacora">
      <HeroSection
  title="📋 Bitácora de Desarrollo"
  subtitle="Registro detallado del proceso: TP1 → TP2 → TP3"
  accentColor="#a855f7"
/>

      {/* ✅ Timeline usando TimelineItem component */}
      <section className="timeline-section">
        <h2>Línea de Tiempo del Proyecto</h2>
        <div className="timeline-container">
          {eventos.map((e, i) => (
            <TimelineItem
              key={i}
              fecha={e.fecha}
              titulo={e.titulo}
              descripcion={e.descripcion}
            />
          ))}
        </div>
      </section>

      {/* ✅ Reutiliza .grid-auto de util.css */}
      <section className="section-content">
        <h2>💡 Decisiones Técnicas Clave</h2>
        <div className="grid-auto">
          <div className="card card-hover">
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontWeight: '700'}}>⚛️ React + Vite</h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Se utiliza React con Vite por su velocidad de desarrollo, hot reload instantáneo y build optimizado. 
              Vite reduce los tiempos de compilación en un 60% comparado con Create React App.
            </p>
          </div>

          <div className="card card-hover">
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontWeight: '700'}}>🎨 CSS Modular</h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Estructura de estilos organizada en capas: variables globales, utilidades reutilizables, 
              estilos base y temas personalizados. Esto permitió mantener los estilos únicos de cada integrante sin duplicar código.
            </p>
          </div>

          <div className="card card-hover">
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontWeight: '700'}}>🧩 Componentización</h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Creación del componente PortalBase que unificó la lógica de los 3 portales individuales, 
              reduciendo más de 300 líneas de código duplicado. Componentes Cards reutilizables para películas y música.
            </p>
          </div>

          <div className="card card-hover">
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontWeight: '700'}}>🌐 APIs Dinámicas</h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Integración de datos locales (JSON con 20 películas) y API externa (Deezer para música). 
              Implementación de proxy serverless en Vercel para evitar problemas de CORS en producción.
            </p>
          </div>
          <div className="card card-hover">
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontWeight: '700'}}>🎧 Reproductor Global</h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Implementación de un sistema de audio unificado con React Context que permite 
              reproducir previews de 30 segundos desde iTunes API. Player flotante persistente 
              en toda la aplicación con controles completos y barra de progreso interactiva.
            </p>
          </div>
          <div className="card card-hover">
            <h3 style={{color: '#a855f7', marginBottom: '1rem', fontWeight: '700'}}>✨ Optimización con useMemo</h3>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              En el TP3, implementamos useMemo para optimizar el filtrado de películas y evitar 
              recálculos innecesarios. Esto mejora el rendimiento especialmente con listas grandes.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Reutiliza .card de util.css */}
      <section className="section-content">
        <h2>🚧 Desafíos Superados</h2>
        <div className="challenge-list" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>

          <div className="card" style={{borderLeft: '4px solid #f472b6'}}>
            <h4 style={{color: '#f472b6', marginBottom: '0.75rem', fontWeight: '700'}}>01. Migración de Estilos Únicos</h4>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              El mayor desafío fue migrar los estilos individuales muy diferentes entre sí (pixel art, retro 80s, tech futurista) 
              a React sin perder identidad visual. <strong>Solución:</strong> Sistema de temas con CSS Variables que permite 
              a cada portal inyectar sus colores primarios y secundarios dinámicamente.
            </p>
          </div>

          <div className="card" style={{borderLeft: '4px solid #f472b6'}}>
            <h4 style={{color: '#f472b6', marginBottom: '0.75rem', fontWeight: '700'}}>02. Sidebar Responsive</h4>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              La sidebar presentaba problemas en móviles: los links no funcionaban y no había espacio para el botón hamburguesa. 
              <strong>Solución:</strong> Rediseño completo con modo overlay en móviles, hamburguesa animada y cierre automático 
              al hacer clic en enlaces.
            </p>
          </div>

          <div className="card" style={{borderLeft: '4px solid #f472b6'}}>
            <h4 style={{color: '#f472b6', marginBottom: '0.75rem', fontWeight: '700'}}>03. API de Deezer en Producción</h4>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              CORS bloqueaba las peticiones a Deezer API desde el dominio de Vercel. 
              <strong>Solución:</strong> Implementación de función serverless en <code style={{
                background: 'rgba(168, 85, 247, 0.2)', 
                padding: '2px 6px', 
                borderRadius: '4px',
                color: '#c084fc'
              }}>/api/deezer.js</code> que actúa como proxy.
            </p>
          </div>

          <div className="card" style={{borderLeft: '4px solid #f472b6'}}>
            <h4 style={{color: '#f472b6', marginBottom: '0.75rem', fontWeight: '700'}}>04. Código Duplicado (TP2)</h4>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Los 3 portales individuales tenían 95% de código idéntico con solo cambios en datos y colores. 
              <strong>Solución:</strong> Creación del componente <code style={{
                background: 'rgba(168, 85, 247, 0.2)', 
                padding: '2px 6px', 
                borderRadius: '4px',
                color: '#c084fc'
              }}>PortalBase.jsx</code> que recibe props configurables, eliminando ~450 líneas duplicadas.
            </p>
          </div>

          <div className="card" style={{borderLeft: '4px solid #f472b6'}}>
            <h4 style={{color: '#f472b6', marginBottom: '0.75rem', fontWeight: '700'}}>05. Controles de Lightbox con Zoom (TP3)</h4>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              Los controles del lightbox se ocultaban cuando se aplicaba zoom a la imagen, dificultando la navegación. 
              <strong>Solución:</strong> Implementación de barras fijas con <code style={{
                background: 'rgba(168, 85, 247, 0.2)', 
                padding: '2px 6px', 
                borderRadius: '4px',
                color: '#c084fc'
              }}>position: sticky</code> para mantener los controles siempre visibles, y contenedor con scroll independiente para la imagen.
            </p>
          </div>

          <div className="card" style={{borderLeft: '4px solid #f472b6'}}>
            <h4 style={{color: '#f472b6', marginBottom: '0.75rem', fontWeight: '700'}}>06. Paginación en iTunes API (TP3)</h4>
            <p style={{color: '#ccc', lineHeight: '1.6'}}>
              La API de iTunes devuelve un resultCount limitado cuando se usa offset, dificultando obtener el total real de resultados. 
              <strong>Solución:</strong> Para la página de Deezer se implementó paginación exitosa. Para iTunes se mantuvo la funcionalidad simple sin paginación debido a las limitaciones de la API.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Reutiliza .grid-auto de util.css */}
      <section className="section-content">
        <h2>📚 Aprendizajes Clave</h2>
        <div className="grid-auto">
          {[
            { icon: '🎯', titulo: 'Planificación', texto: 'La importancia de planificar la arquitectura de componentes antes de comenzar a codear. Esto evitó refactorizaciones masivas a mitad del proyecto.' },
            { icon: '♻️', titulo: 'Reutilización', texto: 'Identificar patrones repetitivos tempranamente y crear componentes reutilizables ahorra tiempo y reduce bugs. El principio DRY (Don\'t Repeat Yourself) es fundamental.' },
            { icon: '🐛', titulo: 'Debugging', texto: 'Las React DevTools son esenciales para entender el flujo de datos entre componentes. Nos salvaron múltiples veces al detectar re-renders innecesarios.' },
            { icon: '📱', titulo: 'Mobile First', texto: 'Diseñar primero para móviles y luego escalar a desktop resulta más eficiente que el enfoque inverso. Los breakpoints deben pensarse desde el inicio.' },
            { icon: '⚡', titulo: 'Performance', texto: 'Lazy loading, optimización de imágenes (WebP) y code splitting mejoran dramáticamente los tiempos de carga. Lighthouse score pasó de 65 a 94.' },
            { icon: '🤝', titulo: 'Colaboración', texto: 'Establecer convenciones de nombres, estructura de carpetas y commits claros facilita el trabajo en equipo y la revisión de código.' }
          ].map((item, i) => (
            <div key={i} className="card card-hover" style={{borderTop: '3px solid #fbbf24'}}>
              <div style={{fontSize: '2.5rem', marginBottom: '0.75rem'}}>{item.icon}</div>
              <h4 style={{color: '#fbbf24', marginBottom: '0.75rem', fontSize: '1.1rem', fontWeight: '700'}}>
                {item.titulo}
              </h4>
              <p style={{color: '#ccc', lineHeight: '1.6', fontSize: '0.95rem'}}>
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Comparación TP2 vs TP3 */}
      <section className="section-content">
        <h2>📊 TP2 vs TP3: Evolución del Proyecto</h2>
        <div className="comparison-container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div className="card" style={{border: '2px solid #f472b6'}}>
            <h3 style={{color: '#f472b6', marginBottom: '1.5rem', textAlign: 'center', fontWeight: '700'}}>
              TP2 - React SPA Base
            </h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              {['Animaciones básicas', 'Sin búsqueda/filtrado', 'Top 10 fijo (sin paginación)', 
                'Tarjetas estáticas sin zoom', 'Tags estáticos de habilidades', 
                'UX funcional pero básica'].map((item, i) => (
                <li key={i} style={{
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  color: '#ccc'
                }}>✗ {item}</li>
              ))}
            </ul>
          </div>

          <div className="card" style={{border: '2px solid #a855f7'}}>
            <h3 style={{color: '#a855f7', marginBottom: '1.5rem', textAlign: 'center', fontWeight: '700'}}>
              TP3 - Mejoras Implementadas
            </h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              {['✨ Animaciones escalonadas y hovers mejorados', '🔍 Búsqueda y filtros avanzados', 
                '📄 Paginación completa con navegación', '🖼️ Lightbox con zoom y controles', 
                '📊 Barras de progreso animadas', '🎨 UX mejorada con feedback visual'].map((item, i) => (
                <li key={i} style={{
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  color: '#ccc'
                }}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Reflexión final */}
      <section className="section-content">
        <div className="reflection-box">
          <h2>💭 Reflexión del Equipo</h2>
          <p>
            Este proyecto nos enseñó que <strong>migrar de tecnologías legacy a frameworks modernos</strong> no 
            solo mejora el código, sino también la experiencia del desarrollador y del usuario final.
          </p>
          <p>
            El trabajo en equipo fue fundamental: cada integrante aportó desde su especialidad (diseño, 
            lógica, optimización) pero todos aprendimos de todos. Las reuniones semanales de sincronización 
            y el uso de GitHub para code reviews mantuvieron el proyecto organizado.
          </p>
          <p>
            <strong>En el TP3 aprendimos:</strong> que las mejoras de UX no son solo "cosas bonitas", sino que 
            impactan directamente en la usabilidad. Las animaciones suaves, los filtros intuitivos y los controles 
            claros hacen que la aplicación se sienta profesional y pulida. La documentación con capturas de 
            pantalla es esencial para evidenciar el trabajo realizado.
          </p>
          <p>
            <strong>Lo más valioso:</strong> entender que la componentización no es solo "dividir código", 
            sino pensar en piezas reutilizables y mantenibles que faciliten el crecimiento futuro del proyecto.
            El TP3 demostró que una base sólida (TP2) permite agregar mejoras de forma incremental sin 
            refactorizaciones masivas.
          </p>
        </div>
      </section>
    </div>
  );
}
