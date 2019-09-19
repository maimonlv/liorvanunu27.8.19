import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {  } from 'assert';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  API_KEY = 'm0z2hXM8PFEkLD0ilGDm33d1tcZjhx2a';
  urlAutoCompleteSearch = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=';
  urlCityInfo = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=';
  urlOneDayForecast = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';
  urlFiveDayForecast = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/';

  constructor(private httpClient: HttpClient) { }

  public getAutoCompleteCityName(cityName: unknown) {
    try {
      return this.httpClient.get(this.urlAutoCompleteSearch + this.API_KEY + '&q=' + cityName);
    } catch (error) {
      console.error(error);
      return throwError(error.json());
    }
  }

  public getCityDataByCityName(cityName: string) {
    try {
      console.log('getCityDataByCityName: ' + cityName);
      return this.httpClient.get(this.urlCityInfo + this.API_KEY + '&q=' + cityName);
    } catch (error) {
      console.error(error);
      return throwError(error.json());
    }
  }

  public getOneDayCityWeatherByLocationKey(locationKey: string) {
    // TODO: CHECK!!!!
    try {
      return this.httpClient.get(this.urlOneDayForecast + locationKey + '?apikey=' + this.API_KEY + '&metric=true');
    } catch (error) {
      console.error(error);
      return throwError(error.json());
    }
  }

  public getFiveDayCityWeatherByLocationKey(locationKey: string) {
    try {
      return this.httpClient.get(this.urlFiveDayForecast + locationKey + '?apikey=' + this.API_KEY + '&metric=true');
    } catch (error) {
      console.error(error);
      return throwError(error.json());
    }
  }
}
