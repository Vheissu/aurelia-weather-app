import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { resources } from './resources';

import 'bootstrap/dist/css/bootstrap.css';

Aurelia
    .register(resources)
    .app(MyApp)
    .start();
