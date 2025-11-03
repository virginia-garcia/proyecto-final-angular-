import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-movie',
  standalone: true,
  imports: [],
  templateUrl: './featured-movie.html',
  styleUrl: './featured-movie.css'
})
export class FeaturedMovieComponent {
  peliculaDestacada = {
    titulo: 'Inception',
    director: 'Christopher Nolan',
    anio: 2010,
    genero: 'Ciencia Ficción'
  };
}