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

  data1 = JSON.parse(JSON.stringify({
    AdministrativeArea: {
      CountryID: 'IL',
      EnglishName: 'Tel Aviv',
      EnglishType: 'District',
      ID: 'TA',
      Level: 1,
      LocalizedName: 'Tel Aviv',
      LocalizedType: 'District'
    },
    Country: {
      EnglishName: 'Israel',
      ID: 'IL',
      LocalizedName: 'Israel'
    },
    DataSets: ['Alerts'],
    EnglishName: 'Tel Aviv',
    GeoPosition: {
      Elevation: { Metric: 'mashu', Imperial: 'mashuAher' },
      Latitude: 32.045,
      Longitude: 34.77
    },
    IsAlias: false,
    Key: '215854',
    LocalizedName: 'Tel Aviv',
    PrimaryPostalCode: '',
    Rank: 31,
    Region: {ID: 'MEA', LocalizedName: 'Middle East', EnglishName: 'Middle East'},
    SupplementalAdminAreas: [],
    TimeZone: {
      Code: 'IDT',
      GmtOffset: 3,
      IsDaylightSaving: true,
      Name: 'Asia/Jerusalem',
      NextOffsetChange: '2019-10-26T23:00:00Z'
    },
    Type: 'City',
    Version: 1
  }));

  data2 = JSON.parse(JSON.stringify({
    Headline: {
      Category: '',
      EffectiveDate: '2019-09-14T08:00:00+03:00',
      EffectiveEpochDate: 1568437200,
      EndDate: null,
      EndEpochDate: null,
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
      MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us',
      Severity: 4,
      Text: 'Pleasant this weekend'
    },
    DailyForecasts: {
      Date: '2019-09-11T07:00:00+03:00',
      Day: {
        HasPrecipitation: false,
        Icon: 2,
        IconPhrase: 'Mostly sunny'
      },
      EpochDate: 1568174400,
      Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
      MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
      Night: {
        HasPrecipitation: false,
        Icon: 35,
        IconPhrase: 'Partly cloudy'
      },
      Sources: 'AccuWeather',
      Temperature: {
        Maximum: {
          Unit: 'C',
          UnitType: 17,
          Value: 30.6
        },
        Minimum: {
          Unit: 'C',
          UnitType: 17,
          Value: 23.1
        }
      }
    }
  }));

  data3 = JSON.parse(JSON.stringify({
      Headline: {
        EffectiveDate: '2019-09-14T08:00:00+03:00',
        EffectiveEpochDate: 1568437200,
        Severity: 4,
        Text: 'Pleasant this weekend',
        Category: '',
        EndDate: null,
        EndEpochDate: null,
        MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us',
        Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us'
      },
      DailyForecasts: [
        {
          Date: '2019-09-11T07:00:00+03:00',
          EpochDate: 1568174400,
          Temperature: {
            Minimum: {
              Value: 23.3,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 30.6,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 2,
            IconPhrase: 'Mostly sunny',
            HasPrecipitation: false
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Partly cloudy',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us'
        },
        {
          Date: '2019-09-12T07:00:00+03:00',
          EpochDate: 1568260800,
          Temperature: {
            Minimum: {
              Value: 24,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 30.1,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 2,
            IconPhrase: 'Mostly sunny',
            HasPrecipitation: false
          },
          Night: {
            Icon: 34,
            IconPhrase: 'Mostly clear',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us'
        },
        {
          Date: '2019-09-13T07:00:00+03:00',
          EpochDate: 1568347200,
          Temperature: {
            Minimum: {
              Value: 24.1,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 30.7,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 1,
            IconPhrase: 'Sunny',
            HasPrecipitation: false
          },
          Night: {
            Icon: 35,
            IconPhrase: 'Partly cloudy',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us'
        },
        {
          Date: '2019-09-14T07:00:00+03:00',
          EpochDate: 1568433600,
          Temperature: {
            Minimum: {
              Value: 23.7,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 30,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 3,
            IconPhrase: 'Partly sunny',
            HasPrecipitation: false
          },
          Night: {
            Icon: 34,
            IconPhrase: 'Mostly clear',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us'
        },
        {
          Date: '2019-09-15T07:00:00+03:00',
          EpochDate: 1568520000,
          Temperature: {
            Minimum: {
              Value: 23.6,
              Unit: 'C',
              UnitType: 17
            },
            Maximum: {
              Value: 29.8,
              Unit: 'C',
              UnitType: 17
            }
          },
          Day: {
            Icon: 2,
            IconPhrase: 'Mostly sunny',
            HasPrecipitation: false
          },
          Night: {
            Icon: 34,
            IconPhrase: 'Mostly clear',
            HasPrecipitation: false
          },
          Sources: [
            'AccuWeather'
          ],
          MobileLink: 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us'
        }
      ]
  }));
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

  private getDailyForecast() {
    console.log('getDailyForecast: cityKey: ' + this.cityWeather.cityKey);
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
    this.checkData(this.data2);
    this.addDataCityWeather(this.selectedCityData);
  }

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
    // this.checkData(this.data3);
    // this.addDataCityWeather(this.selectedCityData);
  }
}

  private checkData(data: JSON) {
    console.log('checkData: data1: ' + JSON.stringify(data));
    if (data === null) {
    // if (data === null || data[0] === undefined) {
      this.errorMsg = 'No Such City';
      this.selectedCityData = JSON.parse(JSON.stringify(''));
      console.log('in checkData error');
    } else {
      this.errorMsg = '';
      this.selectedCityData = data;
      // Object.assign(this.selectedCityData, data);
      console.log('checkData: data2: ' + JSON.stringify(data));
      console.log('checkData: selectedCityData: ' + JSON.stringify(this.selectedCityData));
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
