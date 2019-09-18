import { Component, OnInit, Input } from '@angular/core';
import { FavoritesListService } from '../favorites-list.service';
import { WeatherCityInfo } from '../weatherCityInfo';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoritesList: WeatherCityInfo[];

  constructor(private listService: FavoritesListService) {
    this.favoritesList = new Array <WeatherCityInfo>();
  }

  ngOnInit() {
    this.favoritesList = this.listService.getFavoritesList();
  }



}
