import Aurelia, { CustomElement } from 'aurelia';
import { App } from './app';
import * as environment from '../config/environment.json';
import testTemplate from './test.html';

// Define App element with simple test template
const AppElement = CustomElement.define({ name: 'app', template: testTemplate }, App);

// Use the declarative API
Aurelia
  .app({
    host: document.getElementById('root'),
    component: AppElement
  })
  .start();
