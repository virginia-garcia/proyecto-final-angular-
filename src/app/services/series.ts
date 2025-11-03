import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeriesResponse } from '../interfaces/episode';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiKey = '2ff6c6e4';
  private baseUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  getEpisodes(seriesName: string = 'From', season: number = 1): Observable<SeriesResponse> {
    const url = `${this.baseUrl}?apikey=${this.apiKey}&t=${seriesName}&Season=${season}`;
    return this.http.get<SeriesResponse>(url);
  }

  getEpisodesByCustomSeries(seriesName: string, season: number): Observable<SeriesResponse> {
    const url = `${this.baseUrl}?apikey=${this.apiKey}&t=${seriesName}&Season=${season}`;
    return this.http.get<SeriesResponse>(url);
  }
}