import { DailyForecast } from './../dailyForecast';
import { WeatherCityInfo } from './../weatherCityInfo';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FavoritesListService } from '../favorites-list.service';

@Component({
  selector: 'app-city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit, OnChanges {

  @Input() selectedCity: string;

  selectedCityData: any;
  errorMsg: string;
  cityWeather: WeatherCityInfo;

  constructor(private weatherService: WeatherService,
              private listService: FavoritesListService) {
                this.selectedCityData = null;
                this.cityWeather = new WeatherCityInfo();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedCity) {
      console.log('in ngOnChanges calling findWeather with selected city: ' + this.selectedCity);
      this.findWeather();
    }


  }

  ngOnInit() {
    // this.cityWeather = new WeatherCityInfo();
  }

  public findWeather() {

    this.getFirstCityData();

    this.printFirstCityDataToConsole();

    // this.getDailyForecast();

    this.getFiveDayForecast();

  }

  private getFirstCityData() {
    console.log('getFirstCityData: ' + this.selectedCity);
    this.weatherService.getCityDataByCityName(this.selectedCity).subscribe(data => {
      console.log('getFirstCityData:');
      console.log(data);
      this.checkData(JSON.parse(JSON.stringify(data)));

      if (this.selectedCityData === null) {
        console.log('No Cities Array');
      } else { /********************may be not [0]************************** */
        // console.log('selectedCityData:');
        // console.log(this.selectedCityData);
        this.createCityWeather(this.selectedCityData);
      }/********************may be not [0]************************** */
    });

    // this.checkData(this.data1);
    // this.createCityWeather(this.selectedCityData);
  }

  private printFirstCityDataToConsole() {
    if (this.cityWeather && this.cityWeather.cityKey &&
      this.cityWeather.cityName && this.cityWeather.country) {
    console.log(this.cityWeather.cityKey);
    console.log(this.cityWeather.cityName);
    console.log(this.cityWeather.country);
    }
  }

  // private getDailyForecast() {
    // console.log('getDailyForecast: cityKey: ' + this.cityWeather.cityKey);
    // this.weatherService.getOneDayCityWeatherByLocationKey(this.cityWeather.cityKey).subscribe(data => {
    //   this.checkData(data);

    //   if (this.selectedCityData === null) {
    //     console.log('No Cities Array');
    //   } else {
    //     console.log('getDailyForecast: selectedCityInfo: ');
    //     console.log(this.selectedCityData);
    //     this.addDataCityWeather(this.selectedCityData);
    //   }
    // });
    // this.checkData(this.data2);
    // this.addDataCityWeather(this.selectedCityData);
  // }

  private getFiveDayForecast() {
    if (this.cityWeather && this.cityWeather.cityKey) {
    console.log('getFiveDayForecast: cityKey: ' + this.cityWeather.cityKey);

    this.weatherService.getFiveDayCityWeatherByLocationKey(this.cityWeather.cityKey).subscribe(data => {
      this.checkData(JSON.parse(JSON.stringify(data)));
      if (this.selectedCityData === null) {
        console.log('No Cities Array');
      } else {
        console.log('getDailyForecast: selectedCityInfo: ');
        console.log(this.selectedCityData);
        this.addDataCityWeather(this.selectedCityData);
      }
    });
  }
}

  private checkData(data: JSON) {
    // console.log('checkData: data1: ' + JSON.stringify(data));
    if (data === null) {
    // if (data === null || data[0] === undefined) {
      this.errorMsg = 'No Such City';
      this.selectedCityData = JSON.parse(JSON.stringify(''));
      // console.log('in checkData error');
    } else {
      this.errorMsg = '';
      this.selectedCityData = data;
      // console.log('checkData: data2: ' + JSON.stringify(data));
      // console.log('checkData: selectedCityData: ' + JSON.stringify(this.selectedCityData));
    }
  }

  private addDataCityWeather(data: any) {
    let currentDailyForecast: DailyForecast;
    JSON.parse(JSON.stringify(data.DailyForecasts)).forEach(element => {
      currentDailyForecast = new DailyForecast();
      currentDailyForecast.date = element.Date.toString();
      currentDailyForecast.minTemperature = element.Temperature.Minimum.Value;
      currentDailyForecast.maxTemperature = element.Temperature.Maximum.Value;
      currentDailyForecast.temperatureUnits = element.Temperature.Minimum.Unit.toString();
      currentDailyForecast.temperatureUnitType = element.Temperature.Minimum.UnitType;
      currentDailyForecast.dayIconNumber = element.Day.Icon;
      currentDailyForecast.nightIconNumber = element.Night.Icon;
      currentDailyForecast.dayIconPhrase = element.Day.IconPhrase.toString();
      currentDailyForecast.nightIconPhrase = element.Night.IconPhrase.toString();
      this.cityWeather.daysForecasts.push(currentDailyForecast);
    });

    this.cityWeather.info = data.Headline.Text;
  }

  private createCityWeather(data: any) {

    // this.cityWeather = new WeatherCityInfo();
    console.log('createCityWeather:');
    console.log(data);
    this.cityWeather.cityKey = data[0].Key;
    this.cityWeather.cityName = data[0].LocalizedName;
    this.cityWeather.country = data[0].Country.LocalizedName;

  }

  toggleFavorite() {
    this.cityWeather.favorited = !this.cityWeather.favorited;
    if (this.cityWeather.favorited) {
      console.log('toggleFavorite cityKey:' + this.cityWeather.cityKey);
      if (!this.listService.isCityInListByKey(this.cityWeather.cityKey)) {
        this.listService.addToFavorites(this.cityWeather);
        console.log(this.listService.getFavoritesList());

      }
    } else {
      console.log('toggleFavorite: delete by cityKey:' + this.cityWeather.cityKey);
      if (this.listService.isCityInListByKey(this.cityWeather.cityKey)) {
        this.listService.deleteCityByKey(this.cityWeather.cityKey);
        console.log(this.listService.getFavoritesList());
      }
    }
  }
}
