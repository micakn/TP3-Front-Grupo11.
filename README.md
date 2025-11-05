# TechVerse - Grupo 11 - TP3

[![React](https://img.shields.io/badge/React-18.0.0-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-purple?logo=vite)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Modern-orange?logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Deployed](https://img.shields.io/badge/Deployed-Vercel-black?logo=vercel)](https://tp-3-front-grupo11.vercel.app/)

## 🌐 Links del Proyecto

- **🚀 Deploy en Vercel:** [https://tp-3-front-grupo11.vercel.app/](https://tp-3-front-grupo11.vercel.app/)
- **📂 Repositorio GitHub:** [https://github.com/micakn/TP3-Front-Grupo11](https://github.com/micakn/TP3-Front-Grupo11)

---

## 📋 Descripción

**TechVerse** es una **Single Page Application (SPA)** desarrollada en React que presenta a nuestro equipo de desarrollo. Este proyecto representa la evolución desde el **TP2** (React SPA base) al **TP3**, implementando mejoras significativas en experiencia de usuario, funcionalidad e interactividad.

### 🎯 Evolución del Proyecto

- **TP1 → TP2:** Migración de sitio estático HTML/CSS/JS a React SPA con componentes reutilizables, routing dinámico y consumo de APIs
- **TP2 → TP3:** Implementación de 5 mejoras obligatorias que mejoran la UX, funcionalidad y visualización de datos

---

## 👥 Equipo - Grupo 11

### Integrantes Activos

| Nombre      | Edad    | Ubicación                 | Rol                                    | Especialidades                                |
| ----------- | ------- | ------------------------- | -------------------------------------- | --------------------------------------------- |
| **Paula**   | 32 años | Berazategui, Buenos Aires | Full Stack Developer                   | HTML, CSS, PHP, JavaScript                    |
| **Micaela** | 31 años | Buenos Aires, Argentina   | Frontend Developer & Design Enthusiast | Impresión 3D, Diseño Creativo, Programación   |
| **María**   | 44 años | Córdoba, Argentina        | Creative Designer & Project Manager    | Organización, Trabajo en equipo, Comunicación |

---

## 🛠️ Stack Tecnológico

### Frontend Core

- **⚛️ React 18** - Librería principal con hooks modernos
- **🚀 Vite** - Build tool rápido y dev server optimizado
- **🛣️ React Router DOM 6** - Navegación SPA declarativa
- **🎨 CSS3 Puro** - Estilos modernos sin frameworks (CSS Variables, Flexbox, Grid)

### Gestión de Datos

- 📦 Fetch API - Consumo asíncrono de datos
- 🔄 React Hooks - `useState`, `useEffect`, `useMemo` para manejo de estado
- 🎵 React Context API - Estado global para reproductor de música
- 📁 JSON Local - 20+ películas almacenadas localmente
- 🎶 Deezer API - Top chart global en tiempo real
- 🎧 iTunes Search API - Búsqueda y previews de música sin autenticación

### Deploy & DevOps

- **☁️ Vercel** - Hosting y CI/CD automático
- **🔧 Serverless Functions** - Proxy API para Deezer (`/api/deezer.js`)
- **📱 Progressive Enhancement** - Mejora progresiva para todos los dispositivos

---

## 📁 Estructura del Proyecto

```
tp3-front-grupo11/
├── 📁 api/
│   └── deezer.js              # Proxy serverless para Deezer API
│
├── 📁 public/
│   ├── 📁 img/                # Imágenes, avatares, logos, diagramas, capturas TP3
│   └── 📁 sounds/             # Sonidos para efectos
│
├── 📁 src/
│   ├── 📁 components/         # Componentes reutilizables
│   │   ├── 📁 cards/
│   │   │   ├── MusicaCard.jsx
│   │   │   └── PeliculaCard.jsx
│   │   ├── 📁 ui/
│   │   │   ├── CardGrid.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   └── ui.css
│   │   ├── AudioPlayer.jsx   # Reproductor global con Context API
│   │   ├── PortalBase.jsx
│   │   ├── SeccionIntegrante.jsx
│   │   ├── Sidebar.jsx
│   │   └── TimelineItem.jsx
│   │
│   ├── 📁 data/
│   │   └── peliculas.json     # 20 películas con datos completos
│   │
│   ├── 📁 pages/              # Páginas principales
│   │   ├── 📁 portales/
│   │   │   ├── Maria.jsx
│   │   │   ├── Micaela.jsx
│   │   │   └── Paula.jsx
│   │   ├── Bitacora.jsx
│   │   ├── Diagramas.jsx
│   │   ├── Home.jsx
│   │   ├── Integrantes.jsx    # ✨ Mejora TP3: Barras de progreso
│   │   ├── Musica.jsx         # ✨ Mejora TP3: Paginación
│   │   ├── MusicaPlayer.jsx
│   │   └── Peliculas.jsx      # ✨ Mejora TP3: Búsqueda/Filtrado + Lightbox
│   │
│   ├── 📁 styles/             # Estilos globales y temas
│   │   ├── IntegrantesBase.css
│   │   ├── MediaPages.css
│   │   ├── themes.css
│   │   ├── util.css           # ✨ Mejora TP3: Animaciones
│   │   └── variables.css
│   │
│   ├── 📁 utils/
│   │   └── getDeezerArtists.js
│   │
│   ├── App.jsx                # Componente raíz + routing
│   ├── App.css
│   ├── index.css
│   └── main.jsx               # Punto de entrada
│
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vercel.json                # Configuración para deploy
└── vite.config.js
```

---

## 🚦 Instalación y Uso

### Prerrequisitos

- **Node.js** 18+
- **npm** 9+ o **yarn** 1.22+

### Pasos de Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/micakn/TP3-Front-Grupo11.git
cd TP3-Front-Grupo11
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:5173
```

---

## 📊 Secciones de la Aplicación

### 🏠 **Home**

- Página principal con introducción al proyecto
- Estadísticas actualizadas (3 integrantes, 20+ películas, 2 APIs, reproductor global)
- Stack tecnológico con íconos animados
- Características destacadas del TP2 y TP3

### 👥 **Integrantes**

- Presentación del equipo activo
- Tarjetas interactivas con información de cada integrante
- **✨ Mejora TP3:** Barras de progreso animadas de habilidades
- Enlaces directos a portales individuales

### 🎬 **Películas**

- Catálogo de 20+ películas desde JSON local
- **✨ Mejora TP3:** Sistema de búsqueda y filtrado (texto, género, años)
- **✨ Mejora TP3:** Lightbox interactivo con zoom y navegación
- Información detallada: año, género, director, rating, duración
- Enlaces a IMDb

### 🎵 **Música (Deezer API)**

- Top canciones globales desde Deezer API
- **✨ Mejora TP3:** Paginación con botones Anterior/Siguiente
- Datos en tiempo real del chart mundial
- Imágenes de álbumes en alta calidad
- Enlaces directos a Deezer

### 🎧 **Reproductor (iTunes API)**

- Búsqueda libre de canciones y artistas
- Previews reproducibles de 30 segundos reales
- Player flotante global persistente en toda la app
- Controles completos (play/pause/stop)
- Barra de progreso interactiva
- Carátulas de álbumes giratorias durante reproducción

### 🌟 **Portales Individuales**

Cada integrante mantiene su propio portal con diseño único y datos personalizados.

---

## 🚀 TP3 - Mejoras y Evolución del Proyecto

### 📋 Resumen de Mejoras Implementadas

Este TP3 incluye **5 mejoras obligatorias** que mejoran significativamente la experiencia de usuario, funcionalidad e interactividad de la aplicación:

| Mejora                    | Estado | Ubicación                                | Impacto                        |
| ------------------------- | ------ | ---------------------------------------- | ------------------------------ |
| ✨ Animaciones Suaves     | ✅     | `src/styles/util.css`                    | Alto - UX mejorada             |
| 🔍 Búsqueda/Filtrado JSON | ✅     | `src/pages/Peliculas.jsx`                | Alto - Funcionalidad nueva     |
| 📄 Paginación API Externa | ✅     | `src/pages/Musica.jsx` + `api/deezer.js` | Medio - Navegación mejorada    |
| 🖼️ Lightbox Interactivo   | ✅     | `src/pages/Peliculas.jsx`                | Alto - Experiencia visual      |
| 📊 Barras de Habilidades  | ✅     | `src/pages/Integrantes.jsx`              | Medio - Visualización mejorada |

---

## 📸 Documentación de Mejoras TP3

### 1. ✨ Animaciones Suaves y Efectos Hover

**Descripción:** Implementación de animaciones suaves y efectos hover mejorados en toda la aplicación para mejorar la experiencia visual y la interactividad.

**Características implementadas:**

- **Transiciones al cargar tarjetas:** Las tarjetas de películas y música aparecen con animación escalonada (slideInUp) con delays progresivos
- **Efectos hover mejorados:**
  - Tarjetas con elevación (`translateY(-8px)`) y escala (`scale(1.02)`) al pasar el mouse
  - Imágenes con zoom suave en las tarjetas (`scale(1.1)`)
  - Botones con efectos de escala y sombras dinámicas
- **Transiciones entre páginas:** Animación suave al navegar entre secciones
- **Curvas de animación:** Uso de `cubic-bezier(0.4, 0, 0.2, 1)` para transiciones más naturales

**Ubicación del código:** `src/styles/util.css`

**Cambios técnicos:**

- Animaciones `fadeIn` y `slideInUp` con delays escalonados (0.1s, 0.2s, 0.3s...)
- Hovers con `transform: scale()` y `translateY()`
- Transiciones con duración de 0.3s a 0.5s
- Efectos `:active` en botones para feedback táctil

**Capturas de pantalla:**

**Antes (TP2):**
![Sin animaciones - TP2](./public/img/tp3-mejora1-animaciones-antes.png)
_Nombre del archivo: `tp3-mejora1-animaciones-antes.png`_

**Después (TP3):**
![Con animaciones suaves - TP3](./public/img/tp3-mejora1-animaciones-despues.png)
_Nombre del archivo: `tp3-mejora1-animaciones-despues.png`_

> **Nota:** Las capturas deben mostrar el efecto hover en tarjetas y la animación de carga escalonada.

---

### 2. 🔍 Búsqueda y Filtrado en JSON Local

**Descripción:** Sistema completo de búsqueda y filtrado para el catálogo de películas almacenadas localmente en `peliculas.json`.

**Características implementadas:**

- **Búsqueda por texto:** Busca en título, director y género simultáneamente mientras se escribe
- **Filtro por género:** Dropdown con todos los géneros disponibles (extraídos dinámicamente del JSON)
- **Filtro por rango de años:** Inputs numéricos para año "desde" y "hasta" con validación
- **Contador dinámico:** Muestra "X de Y películas" según filtros aplicados
- **Botón de reinicio:** Restablece todos los filtros al estado inicial

**Ubicación del código:** `src/pages/Peliculas.jsx`

**Funcionalidad técnica:**

- Búsqueda en tiempo real con `useState` y `useMemo` para optimización
- Filtros combinables (texto + género + años) que funcionan simultáneamente
- Uso de `useMemo` para evitar recálculos innecesarios del filtrado
- Validación de rangos de años (min/max calculados automáticamente)

**Capturas de pantalla:**

**Antes (TP2):**
![Sin búsqueda/filtros - TP2](./public/img/tp3-mejora2-busqueda-filtros-antes.png)
_Nombre del archivo: `tp3-mejora2-busqueda-filtros-antes.png`_

**Después (TP3):**
![Con búsqueda y filtros activos - TP3](./public/img/tp3-mejora2-busqueda-filtros-despues.png)
_Nombre del archivo: `tp3-mejora2-busqueda-filtros-despues.png`_

> **Nota:** Las capturas deben mostrar el campo de búsqueda, dropdown de género, inputs de años y el contador "X de Y películas" con filtros aplicados.

---

### 3. 📄 Paginación para API Externa

**Descripción:** Sistema de paginación para navegar por los resultados de la API de Deezer (Top Global).

**Características implementadas:**

- **Botones de navegación:** Anterior y Siguiente para recorrer páginas
- **Indicador de página:** Muestra "Página X" actual
- **Deshabilitación inteligente:**
  - Botón Anterior deshabilitado en página 1
  - Botón Siguiente deshabilitado cuando no hay más resultados
- **Contador de resultados:** Muestra cantidad de canciones por página y total de páginas

**Ubicación del código:**

- Frontend: `src/pages/Musica.jsx`
- Backend: `api/deezer.js` (actualizado para soportar parámetros `page` y `limit`)

**Funcionalidad técnica:**

- Parámetros `page` y `limit` en la query string de la API
- Cálculo automático del `index` para la API de Deezer: `index = (page - 1) * limit`
- Estado de loading durante la carga de nuevas páginas
- Manejo de estados vacíos cuando no hay más resultados

**Capturas de pantalla:**

**Antes (TP2):**
![Sin paginación, solo top 10 - TP2](./public/img/tp3-mejora3-paginacion-antes.png)
_Nombre del archivo: `tp3-mejora3-paginacion-antes.png`_

**Después (TP3):**
![Con controles de paginación - TP3](./public/img/tp3-mejora3-paginacion-despues.png)
_Nombre del archivo: `tp3-mejora3-paginacion-despues.png`_

> **Nota:** Las capturas deben mostrar los botones Anterior/Siguiente, el indicador "Página X" y el contador de resultados. Se recomienda mostrar la página 2 o superior para evidenciar la funcionalidad.

---

### 4. 🖼️ Galería de Imágenes Interactiva (Lightbox)

**Descripción:** Lightbox completo para visualizar imágenes de películas en tamaño grande con controles avanzados de zoom y navegación.

**Características implementadas:**

- **Apertura al click:** Click en cualquier tarjeta de película abre el lightbox
- **Navegación:** Botones ◀️ ▶️ para cambiar entre imágenes (navegación circular)
- **Zoom:** Controles + Zoom y - Zoom (rango de 0.5x a 3x)
- **Botón Reset:** Vuelve el zoom a 100%
- **Cierre múltiple:**
  - Botón "Cerrar (ESC)" en la barra superior
  - Click fuera del contenido (overlay oscuro)
  - Tecla ESC del teclado
- **Navegación por teclado:** Flechas izquierda/derecha para cambiar imagen
- **Controles fijos:** Barras superior e inferior siempre visibles con `position: sticky`, no se ocultan con el zoom
- **Scroll automático:** Si la imagen ampliada es muy grande, permite scroll dentro del contenedor

**Ubicación del código:** `src/pages/Peliculas.jsx`

**Implementación técnica:**

- Estado para controlar apertura/cierre (`lightboxOpen`), índice actual (`currentIndex`) y nivel de zoom (`zoom`)
- `useEffect` para listeners de teclado (ESC, flechas) que se limpian al cerrar
- Overlay con `position: fixed` y z-index alto (1000)
- Controles con `position: sticky` para mantener visibilidad durante scroll
- Prevención de propagación de eventos para evitar cierre accidental

**Capturas de pantalla:**

**Antes (TP2):**
![Sin lightbox - TP2](./public/img/tp3-mejora4-lightbox-antes.png)
_Nombre del archivo: `tp3-mejora4-lightbox-antes.png`_

**Después (TP3):**
![Lightbox abierto con zoom aplicado - TP3](./public/img/tp3-mejora4-lightbox-despues.png)
_Nombre del archivo: `tp3-mejora4-lightbox-despues.png`_

> **Nota:** Las capturas deben mostrar el lightbox abierto con la imagen grande, los controles de zoom visibles, y preferiblemente con zoom aplicado para evidenciar la funcionalidad. Se recomienda capturar también la navegación entre imágenes.

---

### 5. 📊 Barras de Progreso de Habilidades

**Descripción:** Barras de progreso animadas que reflejan el nivel de cada habilidad de los integrantes del equipo.

**Características implementadas:**

- **Animación al cargar:** Las barras se llenan progresivamente desde 0% hasta su nivel objetivo (transición de 1 segundo)
- **Diseño visual:**
  - Barras con fondo semitransparente (`rgba(255, 255, 255, 0.1)`)
  - Relleno con color del integrante (`--color-principal`)
  - Efecto shimmer (brillo) animado que se desplaza continuamente
  - Sombra con glow del color de la habilidad
- **Información clara:**
  - Nombre de la habilidad a la izquierda
  - Porcentaje a la derecha en color destacado
  - Altura responsive (24px desktop, 20px móvil)
- **Datos por integrante:**
  - **Paula:** HTML (90%), CSS (85%), PHP (80%), JavaScript (75%)
  - **Micaela:** Impresión 3D (95%), Diseño Creativo (90%), Programación (75%), React (70%)
  - **María:** Organización (95%), Trabajo en equipo (90%), Resolución de problemas (85%), Comunicación (92%)

**Ubicación del código:**

- Componente: `src/pages/Integrantes.jsx` (componente `SkillBar`)
- Estilos: `src/pages/Integrantes.css`

**Implementación técnica:**

- Componente `SkillBar` con animación de `width` de 0% a nivel objetivo usando `useState` y `useEffect`
- Transición de 1 segundo con `ease-out` para animación suave
- Efecto shimmer con `::after` y animación `@keyframes shimmer` que se repite infinitamente
- Diseño responsive con breakpoints para móviles (altura y tamaño de fuente reducidos)

**Capturas de pantalla:**

**Antes (TP2):**
![Tags estáticos de especialidades - TP2](./public/img/tp3-mejora5-barras-habilidades-antes.png)
_Nombre del archivo: `tp3-mejora5-barras-habilidades-antes.png`_

**Después (TP3):**
![Barras de progreso animadas - TP3](./public/img/tp3-mejora5-barras-habilidades-despues.png)
_Nombre del archivo: `tp3-mejora5-barras-habilidades-despues.png`_

> **Nota:** Las capturas deben mostrar claramente las barras de progreso con sus porcentajes y la animación de llenado. Se recomienda capturar la página de Integrantes mostrando al menos una tarjeta completa con las barras visibles.

---

## 📝 Guía de Capturas de Pantalla

### 📸 Archivos Requeridos

Para cumplir con los requisitos del TP3, debes agregar las siguientes capturas de pantalla en la carpeta `public/img/`:

| Mejora                | Archivo "Antes"                            | Archivo "Después"                            |
| --------------------- | ------------------------------------------ | -------------------------------------------- |
| 1. Animaciones        | `tp3-mejora1-animaciones-antes.png`        | `tp3-mejora1-animaciones-despues.png`        |
| 2. Búsqueda/Filtrado  | `tp3-mejora2-busqueda-filtros-antes.png`   | `tp3-mejora2-busqueda-filtros-despues.png`   |
| 3. Paginación         | `tp3-mejora3-paginacion-antes.png`         | `tp3-mejora3-paginacion-despues.png`         |
| 4. Lightbox           | `tp3-mejora4-lightbox-antes.png`           | `tp3-mejora4-lightbox-despues.png`           |
| 5. Barras Habilidades | `tp3-mejora5-barras-habilidades-antes.png` | `tp3-mejora5-barras-habilidades-despues.png` |

### 📋 Recomendaciones para las Capturas

**Herramientas recomendadas:**

- Windows: Snipping Tool, Lightshot, o `Win + Shift + S`
- Mac: `Cmd + Shift + 4` o herramientas de captura nativas
- Navegador: Extensiones como Fireshot o Awesome Screenshot

**Características de las capturas:**

- **Formato:** PNG o WebP (preferible para menor tamaño)
- **Tamaños:** Capturar en diferentes resoluciones (desktop 1920x1080, tablet, móvil)
- **Interacciones:** Mostrar hover, click, zoom cuando sea relevante
- **Claridad:** Asegurar que el texto y elementos sean legibles
- **Contexto:** Incluir suficiente contexto para entender la mejora

**Ejemplos de qué capturar:**

- **Animaciones:** Tarjeta con efecto hover visible, animación de carga en progreso
- **Búsqueda:** Campo de búsqueda con texto, filtros aplicados, contador visible
- **Paginación:** Botones de navegación, indicador de página, página 2 o superior
- **Lightbox:** Lightbox abierto, controles de zoom visibles, zoom aplicado
- **Barras:** Tarjeta completa de integrante, barras con porcentajes visibles

---

## 🎯 Comparación TP2 vs TP3

| Aspecto                    | TP2 (Base)                 | TP3 (Mejorado)                                                           |
| -------------------------- | -------------------------- | ------------------------------------------------------------------------ |
| **Animaciones**            | Transiciones básicas       | ✨ Animaciones escalonadas, hovers mejorados, transiciones entre páginas |
| **Búsqueda**               | ❌ Sin búsqueda            | ✅ Búsqueda por texto, filtros por género y años                         |
| **Paginación**             | ❌ Solo top 10 fijo        | ✅ Paginación completa con navegación y contadores                       |
| **Visualización Imágenes** | ❌ Solo tarjetas estáticas | ✅ Lightbox con zoom, navegación y controles avanzados                   |
| **Habilidades**            | Tags estáticos             | ✅ Barras de progreso animadas con porcentajes                           |
| **UX**                     | Funcional pero básico      | ✨ Experiencia mejorada con feedback visual y animaciones                |

---

## 🌐 Deploy en Vercel

### Configuración Automática

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Framework Preset:** Vite
- **Node Version:** 18.x

### Archivos de Configuración

**`vercel.json`**

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }],
  "functions": {
    "api/deezer.js": {
      "memory": 1024,
      "maxDuration": 10
    }
  }
}
```

---

## 🐛 Troubleshooting

### Problemas Comunes

**❌ Error de CORS con Deezer API**

```bash
✅ Solución: Usar el proxy serverless en /api/deezer.js
```

**❌ Sidebar no se cierra en móvil**

```bash
✅ Verificar que el overlay tenga el event listener correcto
```

**❌ Imágenes no cargan**

```bash
✅ Verificar que las rutas sean relativas a /public
✅ Usar /img/nombre.webp (sin "public" en la ruta)
```

---

## 📞 Contacto y Colaboradores

**Grupo 11 - Desarrollo Web Full Stack**

- **Paula** - Full Stack Developer
- **Micaela** - Frontend Developer & Design Enthusiast
- **María** - Creative Designer & Project Manager

---

## 📄 Licencia

Este proyecto fue desarrollado como parte del Trabajo Práctico 3 de la materia Desarrollo Web Full Stack - 2025.

---

**Desarrollado con ❤️ por el Grupo 11**  
_Trabajo Práctico 3 - Mejoras y Evolución del Proyecto React - Noviembre 2025_
