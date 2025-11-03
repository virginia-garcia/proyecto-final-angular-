import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../../components/movie-list/movie-list';
import { MovieService } from '../../services/movie';
import { Movie } from '../../interfaces/movie';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  templateUrl: './movies.html',
  styleUrls: ['./movies.css']
})
export class MoviesComponent implements OnInit { 
  movies: Movie[] = [];
  private movieService = inject(MovieService);

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }
}
