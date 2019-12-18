import { HttpClient } from '@aurelia/fetch-client';
import { DOM } from '@aurelia/runtime-html';

export class WeatherApi {
    private apiKey = '';
    private units = 'metric';
	private http;

	constructor() {
		this.http = new HttpClient(DOM);
	}

    public async getWeather(address): Promise<IWeatherResponse> {
        const req = await this.http.fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${address}&units=${this.units}&APPID=${this.apiKey}`);

        return req.json();
    }
}

interface IWeatherResponse {
    cod: string;
    message: number;
    cnt: number;
    list: IWeatherResponseItem[];
}

interface IWeatherResponseItemWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

interface IWeatherResponseItem {
    dt: number;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        sea_level: number;
        grnd_level: number;
        humidity: number;
        temp_kf: number;
    };
    weather: IWeatherResponseItemWeather[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
    };
    rain: {
        '3h': number;
    };
    sys: {
        pod: string;
    };
    dt_txt: string;
}