import { Injectable, Output } from '@angular/core';
import { WeatherCityInfo } from './weatherCityInfo';

@Injectable({
  providedIn: 'root'
})
export class FavoritesListService {

  private favoritesList: WeatherCityInfo[];

  constructor() {
    this.favoritesList = new Array <WeatherCityInfo>();
  }

  addToFavorites(city: WeatherCityInfo) {
    this.favoritesList.push(city);
  }

  deleteCityByKey(cityKey: string) {
    if (null != this.favoritesList) {
    this.favoritesList = this.favoritesList.filter(city => cityKey !== city.cityKey);
    }
  }

  getFavoritesList() {
    if (null != this.favoritesList) {
    return this.favoritesList;
    } else {
      return null;
    }
  }

  isCityInListByKey(cityKey: string) {
    if (null != this.favoritesList) {
    return this.favoritesList.find(city => cityKey === city.cityKey) ? true : false;
    } else {
      return false;
    }
  }

}
