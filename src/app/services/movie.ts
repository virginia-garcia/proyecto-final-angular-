import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    { 
      id: 1, 
      title: 'The Shawshank Redemption', 
      image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      trailerUrl: 'https://www.youtube.com/embed/6hB3S9bIaco',
      genre: 'Drama',
      release_date: '1994-09-23',
      overview: 'Dos hombres encarcelados forjan una amistad a lo largo de los años, encontrando consuelo y eventual redención.'
    },
    { 
      id: 2, 
      title: 'The Godfather', 
      image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      trailerUrl: 'https://www.youtube.com/embed/sY1S34973zA',
      genre: 'Drama',
      release_date: '1972-03-24',
      overview: 'El patriarca de una dinastía del crimen organizado transfiere el control de su imperio clandestino a su hijo reacio.'
    },
    { 
      id: 3, 
      title: 'The Dark Knight', 
      image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      trailerUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY',
      genre: 'Acción',
      release_date: '2008-07-18',
      overview: 'Cuando el Joker emerge como una amenaza, Batman debe aceptar uno de los mayores desafíos psicológicos y físicos.'
    },
    { 
      id: 4, 
      title: 'Pulp Fiction', 
      image: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      trailerUrl: 'https://www.youtube.com/embed/s7EdQ4FqbhY',
      genre: 'Drama',
      release_date: '1994-10-14',
      overview: 'Las vidas de dos asesinos a sueldo, un boxeador, la esposa de un gángster y dos bandidos se entrelazan.'
    },
    { 
      id: 5, 
      title: 'Forrest Gump', 
      image: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
      trailerUrl: 'https://www.youtube.com/embed/bLvqoHBptjg',
      genre: 'Drama',
      release_date: '1994-07-06',
      overview: 'La historia de un hombre con buen corazón pero bajo coeficiente intelectual que presencia eventos históricos clave.'
    },
    { 
      id: 6, 
      title: 'Inception', 
      image: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
      trailerUrl: 'https://www.youtube.com/embed/YoHD9XEInc0',
      genre: 'Ciencia Ficción',
      release_date: '2010-07-16',
      overview: 'Un ladrón que roba secretos corporativos a través de la tecnología de compartir sueños recibe una última misión.'
    },
    { 
      id: 7, 
      title: 'The Matrix', 
      image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      trailerUrl: 'https://www.youtube.com/embed/vKQi3bBA1y8',
      genre: 'Ciencia Ficción',
      release_date: '1999-03-31',
      overview: 'Un hacker descubre la impactante verdad sobre su realidad y su papel en la guerra contra sus controladores.'
    },
    { 
      id: 8, 
      title: 'Interstellar', 
      image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
      genre: 'Ciencia Ficción',
      release_date: '2014-11-07',
      overview: 'Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en busca de un nuevo hogar.'
    },
    { 
      id: 9, 
      title: 'Parasite', 
      image: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3v.jpg',
      trailerUrl: 'https://www.youtube.com/embed/5xH0HfJHsaY',
      genre: 'Drama',
      release_date: '2019-05-30',
      overview: 'Codicia y discriminación de clases amenazan la relación simbiótica entre dos familias.'
    },
    { 
      id: 10, 
      title: 'The Silence of the Lambs', 
      image: 'https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg',
      trailerUrl: 'https://www.youtube.com/embed/W6Mm8Sbe__o',
      genre: 'Terror',
      release_date: '1991-02-14',
      overview: 'Una agente del FBI busca la ayuda de un asesino encarcelado para capturar a otro asesino en serie.'
    }
  ];

  constructor() {}

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(m => m.id === id);
  }

  getMoviesByGenre(genre: string): Movie[] {
    return this.movies.filter(m => m.genre === genre);
  }
}

