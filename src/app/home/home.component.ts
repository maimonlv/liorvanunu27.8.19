import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cityName: string;
  // @input selectedCity: any;

  constructor() {
    this.cityName = 'Tel Aviv';
   }

  ngOnInit() {
  }

  displayCity(cityName) {
    this.cityName = cityName;
    console.log('the city name home got:' + this.cityName);
  }

}
