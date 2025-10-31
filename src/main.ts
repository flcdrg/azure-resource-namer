import Aurelia, { CustomElement } from 'aurelia';
import { App } from './app';
import * as environment from '../config/environment.json';
import appTemplate from './app-full.html';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

// Define App element with full template
const AppElement = CustomElement.define({ name: 'app', template: appTemplate }, App);

// Use the declarative API
Aurelia
  .app({
    host: document.getElementById('root'),
    component: AppElement
  })
  .start();
