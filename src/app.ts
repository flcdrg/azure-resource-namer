
import {computedFrom, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class App {
  instance: number;
  environment: string;
  region: string;
  selectedResourceType: string;
  message: string;
  workload: string;

  regions: any;

  ea: EventAggregator;
  constructor(ea: EventAggregator) {
    this.ea = ea;
    this.instance = 1;
    this.environment = "prod";
    this.workload = "myapp";
    this.message = "msg";

    this.regions = [
      {
        id: 'westus',
        name: 'US West'
      },
      {
        id: 'eastus2',
        name: 'US East 2'
      }
    ]
  }

  @computedFrom('selectedResourceType', 'environment', 'region', 'workload')
  get resourceName(): string {

    let name = `${this.selectedResourceType}-${this.workload}-${this.environment}-${this.region}`;
    if (this.instance > 0) {
      name += `-${String(this.instance).padStart(3, '0')}`;
    } 

    return name;
  }

}
