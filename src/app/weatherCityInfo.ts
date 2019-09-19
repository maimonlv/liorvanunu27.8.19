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
      this.cityKey = '';
      this.cityName = '';
      this.info = '';
      this.country = '';
      this.favorited = false;
  }

  ngOnInit() {

  }

}
