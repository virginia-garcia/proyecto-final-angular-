import { Injectable } from '@angular/core';

export interface Genre {
  id: number;
  nombre: string;
  descripcion: string;
  icono: string;
}

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  private generos: Genre[] = [
    { id: 1, nombre: 'Acción', descripcion: 'Películas llenas de adrenalina', icono: '🎬' },
    { id: 2, nombre: 'Comedia', descripcion: 'Para reír sin parar', icono: '😂' },
    { id: 3, nombre: 'Drama', descripcion: 'Historias profundas y emotivas', icono: '🎭' },
    { id: 4, nombre: 'Terror', descripcion: 'Para los más valientes', icono: '👻' },
    { id: 5, nombre: 'Ciencia Ficción', descripcion: 'Viajes al futuro y más allá', icono: '🚀' },
    { id: 6, nombre: 'Romance', descripcion: 'Historias de amor inolvidables', icono: '💕' }
  ];

  constructor() { }

  getGenres(): Genre[] {
    return this.generos;
  }

  getGenreById(id: number): Genre | undefined {
    return this.generos.find(g => g.id === id);
  }
}

