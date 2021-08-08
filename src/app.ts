
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class App {
  instance: number;
  environment: string;
  ea: EventAggregator;
  constructor(ea: EventAggregator) {
    this.ea = ea;
    this.instance = 1;
    this.environment = "prod";
  }

  get resourceName(): string {

    if (this.instance > 0) {
      return `rg-mktgsharepoint-${this.environment}-${String(this.instance).padStart(3, '0')}`;
    } else {
      return `rg-mktgsharepoint-${this.environment}`;
    }
  }

}
