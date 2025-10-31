import Aurelia from 'aurelia';
import { App } from './app';
import * as environment from '../config/environment.json';

Aurelia
  .register()
  .app({
    host: document.getElementById('root'),
    component: App
  })
  .start();
