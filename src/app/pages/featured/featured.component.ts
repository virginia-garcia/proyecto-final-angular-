import { Component } from '@angular/core';
import { FeaturedMovieComponent } from '../../components/featured-movie/featured-movie';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [FeaturedMovieComponent],
  templateUrl: './featured.html',
  styleUrl: './featured.css'
})
export class FeaturedComponent {}