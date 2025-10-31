import { Aurelia, IContainer, Registration } from 'aurelia';
import { MyApp } from './my-app';

import 'bootstrap/dist/css/bootstrap.css';


// Use the declarative API
Aurelia
  .app(MyApp)
  .start();
