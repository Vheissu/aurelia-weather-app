import Aurelia, { StyleConfiguration } from 'aurelia';
import { MyApp } from './my-app';
import { resources } from './resources';

import 'bootstrap/dist/css/bootstrap.css';

Aurelia
    .register(
        StyleConfiguration.cssModulesProcessor(),
        ...resources
    )
    .app(MyApp)
    .start();
