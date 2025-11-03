import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { GenresComponent } from './pages/genres/genres.component';
import { FeaturedComponent } from './pages/featured/featured.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'peliculas', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'generos', component: GenresComponent },
  { path: 'destacadas', component: FeaturedComponent },
  { path: '**', redirectTo: ''}

  ];

