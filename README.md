🎬 MovieVault - Angular Movie App
<img width="1319" height="511" alt="image" src="https://github.com/user-attachments/assets/2f5aa933-aa80-4212-ac24-b0f48f54e7d2" />


MovieVault es una aplicación web en Angular que muestra un catálogo de películas con carrusel interactivo y modal de trailers de YouTube.

🛠 Características

🎥 Visualización de un catálogo de películas con imágenes, títulos, fecha de estreno y descripción.

🌀 Carrusel de películas usando Swiper.js.

▶️ Modal para reproducir trailers al hacer click en cada película.

🖼 Manejo de errores de imagen con placeholder.

🔧 Uso de Standalone Components y Angular Pipes (SafeUrlPipe).

💾 Servicio MovieService que simula datos de un API.

📦 Tecnologías usadas

Angular 16 (Standalone Components)

TypeScript

Swiper.js (carrusel)

Tailwind CSS (opcional para estilos)

Angular Pipes (SafeUrlPipe) para trailers seguros

🚀 Instalación

Clonar el repositorio:

git clone <(https://github.com/virginia-garcia/proyecto-final-angular-.git)>
cd movievault


Instalar dependencias:

npm install


Instalar Swiper:

npm install swiper


Ejecutar la aplicación:

ng serve


La app estará disponible en http://localhost:4200.

📂 Estructura del proyecto
src/app/
 ├─ components/
 │    ├─ movies/             # Componente contenedor
 │    └─ movie-list/         # Componente de carrusel y modal
 ├─ interfaces/
 │    └─ movie.ts            # Interfaz Movie
 ├─ pipes/
 │    └─ safe-url.pipe.ts    # Pipe para reproducir trailers seguros
 └─ services/
      └─ movie.service.ts    # Servicio que devuelve las películas

🎯 Uso

La página principal muestra un carrusel de películas.

Haciendo click sobre cualquier película se abre un modal con el trailer.

Si una imagen no carga, se muestra automáticamente un placeholder.

📝 Notas

Las películas están cargadas de forma estática dentro del servicio MovieService.

Para usar trailers y datos reales, se puede integrar The Movie Database API (TMDB).

💡 Mejoras futuras

Integración con API de TMDB para obtener datos en tiempo real.

Filtros por género y búsqueda de películas.

Sistema de favoritos o puntuación.

Mejorar responsividad y animaciones del carrusel.
