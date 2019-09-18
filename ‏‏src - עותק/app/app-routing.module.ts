import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';


const routes: Routes = [
  { path:  '', redirectTo:  'home', pathMatch:  'full' },
  {
    path:  'home',
    component:  HomeComponent
  },
  {
    path:  'favorites',
    component:  FavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
