import { DailyForecast } from './dailyForecast';
import { OnInit } from '@angular/core';

export class WeatherCityInfo implements OnInit {

  daysForecasts: Array<DailyForecast>;
  cityKey: string;
  cityName: string;
  info: string;
  country: string;
  favorited: boolean;

  constructor() {
      this.daysForecasts = new Array<DailyForecast>();
      this.cityKey = null;
      this.cityName = null;
      this.info = null;
      this.country = null;
      this.favorited = false;
  }

  ngOnInit() {

  }

}
