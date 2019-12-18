import { customElement, bindable } from 'aurelia';

import template from './weather-item.html';

@customElement({
    name: 'weather-item',
    template
})
export class WeatherItem {
    @bindable() private data;
}