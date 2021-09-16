
import {computedFrom, inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import { faCopy, faCheckSquare, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { IResource } from 'resourcetype-list';
require('format-unicorn');

@inject(EventAggregator)
export class App {
  instance: number;
  environment: string;
  region: string;
  selectedResource: IResource;
  message: string;
  workload: string;
  copied: boolean;

  copyIcon: IconDefinition;
  copiedIcon: IconDefinition;

  constructor() {
    this.copyIcon = faCopy;
    this.copiedIcon = faCheckSquare;
    this.copied = false;
    this.instance = 1;
    this.environment = "prod";
    this.workload = "myapp";
    this.message = "msg";
    this.region = 'westus';
    this.selectedResource = { abbrev: 'rg', name: ''};
  }

  @computedFrom('selectedResource', 'environment', 'region', 'workload', 'instance')
  get resourceName(): string {

    let pattern: string;
    if (this.selectedResource.pattern) {
      pattern = this.selectedResource.pattern;
    } else {
      // Default pattern
      pattern = '{resource}-{workload}-{environment}-{region}'

      if (this.instance > 0) {
        pattern += '-{instance}'
      }
    }

    let name = pattern.formatUnicorn({ resource: this.selectedResource.abbrev, workload: this.workload, environment: this.environment, region: this.region, instance: String(this.instance).padStart(3, '0') });

    return name;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.resourceName).then(_ => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
