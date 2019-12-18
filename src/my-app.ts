import { WeatherApi } from './services/weather-api';

export class MyApp {
  private weather;

  constructor(private api: WeatherApi) {

  }

  attached() {
    navigator.geolocation.getCurrentPosition((position) => this.success(position), () => this.error());
  }

  async success(position: Position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    this.weather = await this.api.getWeather(latitude, longitude);

    console.log(this.weather);
  }

  error() {

  }
}
