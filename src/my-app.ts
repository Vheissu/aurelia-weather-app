import { WeatherApi } from './services/weather-api';

export class MyApp {
  private location: string = '';
  private weather;

  constructor(private api: WeatherApi) {

  }

  async getWeather() {
    if (this.location && this.location.trim() !== '') {
      this.weather = await this.api.getWeather(this.location);

      console.log(this.weather);
    }
  }
}
