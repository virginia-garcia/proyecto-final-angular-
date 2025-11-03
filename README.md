# 🎬 MovieVault

Aplicación web desarrollada con **Angular** que muestra un catálogo de películas.  
Permite visualizar información, imágenes y tráilers de películas utilizando componentes modulares y servicios para la gestión de datos.

---

## 🚀 Tecnologías utilizadas

- **Angular 17+**
- **TypeScript**
- **HTML5 / CSS3**
- **Tailwind CSS** (para estilos rápidos)
- **Node.js & npm** (para dependencias y ejecución)

---
### ⚙️ Instalación y ejecución

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/virginia-garcia/proyecto-final-angular-.git
   cd movievault
2.npm install
3.ng serve
####  Estructura de componentes
🔹 MoviesComponent

Página principal del catálogo.

Obtiene la lista de películas desde el servicio MovieService y la pasa al componente hijo MovieListComponent.

🔹 MovieListComponent

Recibe los datos desde el padre mediante @Input() moviesData.

Muestra una lista de películas utilizando NgFor.

Permite abrir y cerrar tráilers mediante un modal o iframe seguro (usando el pipe SafePipe).

🔹 MovieService

Contiene un arreglo con las películas disponibles y sus datos: título, imagen, descripción y enlace al tráiler.

Retorna la lista mediante el método getMovies().
##### Demo del proyecto 
https://drive.google.com/file/d/1_UwT7h1X931TRjxdk_bIncf7hPWNWlba/view?usp=sharing

###### Proximas mejoras 


✅ Agregar paginación y búsqueda por título.

✅ Implementar autenticación de usuario.

✅ Desarrollar Pagina Generos 




