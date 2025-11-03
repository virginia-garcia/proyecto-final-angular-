import { Component, Input } from '@angular/core';
import { Movie } from '../interfaces/movie';
import { SwiperModule } from 'swiper/angular';
import { SafeUrlPipe } from '../pipes/safe-url.pipe';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SwiperModule, SafeUrlPipe],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css']
})
export class MovieListComponent {
  @Input() moviesData: Movie[] = [];
  selectedTrailer: string | null = null;

  openTrailer(movie: Movie) {
    this.selectedTrailer = movie.trailerUrl;
  }

  closeTrailer() {
    this.selectedTrailer = null;
  }

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = 'assets/placeholder.jpg';
  }
}
