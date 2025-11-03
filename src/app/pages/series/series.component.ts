import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesService } from '../../services/series';
import { SeriesResponse } from '../../interfaces/episode';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series.html',
  styleUrls: ['./series.css'] 
})
export class SeriesComponent implements OnInit {

  private seriesService = inject(SeriesService);

  episodes: SeriesResponse['Episodes'] = [];
  errorMessage: string | null = null;
  isLoading: boolean = true;

  ngOnInit(): void {
    this.seriesService.getEpisodes('Game of Thrones', 1).subscribe({
      next: (series) => {
        this.isLoading = false;

        if (series.Response === 'True' && series.Episodes) {
          const seasonNumber = series.Season;
          this.episodes = series.Episodes.map(episode => ({
            ...episode,
            Season: seasonNumber
          }));
          this.errorMessage = null;
        } else {
          this.errorMessage = 'No se encontraron episodios para la serie especificada.';
          this.episodes = [];
        }
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error al obtener series:', err);
        this.errorMessage = 'Error de conexión con la API. Inténtalo de nuevo más tarde.';
        this.episodes = [];
      }
    });
  }
}
