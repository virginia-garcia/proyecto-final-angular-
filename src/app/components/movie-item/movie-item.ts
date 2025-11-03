import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './movie-item.html',
  styleUrl: './movie-item.css'
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  @Output() movieSelected = new EventEmitter<string>();
  @Output() trailerRequested = new EventEmitter<string>();

  selectMovie(): void {
    this.movieSelected.emit(this.movie.title);
  }

  openTrailer(event: Event): void {
    event.stopPropagation();
    if (this.movie.trailerUrl) {
      this.trailerRequested.emit(this.movie.trailerUrl);
    }
  }
}
