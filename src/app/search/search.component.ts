import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { WeatherService } from '../../app/weather.service';

import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() cityChangeEmitter = new EventEmitter();

  searchCitiesCtrl = new FormControl();
  filteredCities: any;
  isLoading = false;
  errorMsg: string;
  selectedCity: string;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.selectedCity = 'Tel Aviv';
    this.searchFormControl();
  }

  public searchFormControl() {
    this.searchCitiesCtrl.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => {
        this.errorMsg = ' ';
        this.filteredCities = [];
        this.isLoading = true;
      }),
      switchMap(value => this.weatherService.getAutoCompleteCityName(value)
        .pipe(
          finalize(() => {
            this.isLoading = false;
          }),
        )
      )
    ).
    subscribe(data => {
      if (data === null || data[0] === undefined ) {
        this.errorMsg = 'No Such City';
        this.filteredCities = [];
      } else {
        this.errorMsg = '';
        this.filteredCities = data;
      }

      if (this.filteredCities === null) {
        console.log('No Cities Array');
      } else {
        console.log(this.filteredCities);
      }
    });
  }

  public citySearchInfo(cityName: string) {

    console.log('citySearchInfo city was changed:');
    if (cityName) {
      this.selectedCity = cityName;
      console.log(cityName);
      this.cityChangeEmitter.emit(this.selectedCity);
    }

  }

}
