import { customElement, bindable } from 'aurelia';

@customElement('weather')
export class Weather {
    @bindable() private data;
}