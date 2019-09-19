export class DailyForecast {

  constructor() {
    this.date = null;
    this.dayIconNumber = null;
    this.dayIconPhrase = null;
    this.nightIconNumber = null;
    this.nightIconPhrase = null;
    this.minTemperature = null;
    this.maxTemperature = null;
    this.temperatureUnits = null;
    this.temperatureUnitType = null;
  }
  date: string;
  dayIconNumber: number;
  dayIconPhrase: string;
  nightIconNumber: number;
  nightIconPhrase: string;
  minTemperature: number;
  maxTemperature: number;
  temperatureUnits: string;
  temperatureUnitType: number;
}
