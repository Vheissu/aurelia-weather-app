import Aurelia, { StyleConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import { resources } from './resources';

import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';

Aurelia
    .register(
        StyleConfiguration.cssModulesProcessor(),
        resources
    )
    .app(MyApp)
    .start();
