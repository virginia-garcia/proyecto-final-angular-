import { Component, OnInit, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MovieItemComponent } from '../movie-item/movie-item';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie';
import { SafePipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgFor, NgIf, MovieItemComponent, SafePipe],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css'] 
})
export class MovieListComponent implements OnInit {
 
  @Input() moviesData: Movie[] = [];

  movies: Movie[] = [];
  selectedMovie: string = '';
  selectedTrailer: string | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    
    this.movies = this.moviesData.length > 0 ? this.moviesData : this.movieService.getMovies();
  }

  onMovieSelected(movieTitle: string): void {
    this.selectedMovie = movieTitle;
  }

  openTrailer(trailerUrl: string): void {
    this.selectedTrailer = trailerUrl;
  }

  closeTrailer(): void {
    this.selectedTrailer = null;
  }
}


