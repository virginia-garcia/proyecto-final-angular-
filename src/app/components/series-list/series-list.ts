import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { SeriesService } from '../../services/series';
import { Episode, SeriesResponse } from '../../interfaces/episode';

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './series-list.html',
  styleUrl: './series-list.css'
})
export class SeriesListComponent implements OnInit {
  episodes: Episode[] = [];
  seriesTitle: string = '';
  season: string = '';
  seriesPoster: string = '';
  loading: boolean = false;
  error: string = '';

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }

  loadEpisodes(): void {
    this.loading = true;
    this.error = '';
    
    this.seriesService.getEpisodes('Game of Thrones', 1).subscribe({
      next: (response: SeriesResponse) => {
        if (response.Episodes) {
          this.episodes = response.Episodes;
          this.seriesTitle = response.Title;
          this.season = response.Season;
          this.loading = false;
        } else {
          this.error = 'No se encontraron episodios';
          this.loading = false;
        }
      },
      error: (err) => {
        this.error = 'Error al cargar los episodios. Verifica el nombre de la serie.';
        this.loading = false;
        console.error('Error:', err);
      }
    });

    
    this.seriesPoster = 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg';
  }

  loadCustomSeries(seriesName: string, seasonNum: number): void {
    if (!seriesName || seriesName.trim() === '') {
      this.error = 'Por favor ingresa un nombre de serie';
      return;
    }

    this.loading = true;
    this.error = '';
    
    this.seriesService.getEpisodesByCustomSeries(seriesName, seasonNum).subscribe({
      next: (response: SeriesResponse) => {
        if (response.Episodes && response.Response !== 'False') {
          this.episodes = response.Episodes;
          this.seriesTitle = response.Title;
          this.season = response.Season;
          this.loading = false;
        } else {
          this.error = 'No se encontró la serie o temporada. Intenta con otro nombre.';
          this.episodes = [];
          this.loading = false;
        }
      },
      error: (err) => {
        this.error = 'Error al cargar los episodios. Verifica el nombre de la serie.';
        this.loading = false;
        console.error('Error:', err);
      }
    });
  }
}