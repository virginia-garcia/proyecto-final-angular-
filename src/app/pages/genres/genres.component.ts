import { Component } from '@angular/core';
import { GenreList } from '../../components/genre-list/genre-list';

@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [GenreList],
  templateUrl: './genres.html',
  styleUrl: './genres.css'
})
export class GenresComponent {}