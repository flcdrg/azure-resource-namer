import { IResource } from './iresource';
import { formatResourceName, IFeedback } from './formatting';
import { resources } from './resources';
import { bindable } from 'aurelia';

export class MyApp implements IFeedback {
  thingy: string;
  lastName: string;
  instance: number;
  environment: string;
  @bindable region: string;
  selectedResource: IResource;
  message: string;
  workload: string;
  copied: boolean;
  resourceNameValid: boolean;
  validationFeedback: string;
  resources: {
    category: string;
    assets: IResource[]
  }[];

  constructor() {
    this.copied = false;
    this.instance = 1;
    this.environment = "prod";
    this.workload = "myapp";
    this.message = "msg";
    this.region = 'westus';
    this.resources = resources;
    this.selectedResource = { abbrev: 'rg', name: ''};
    this.thingy = 'ah';
    this.resourceNameValid = true;
  }

  get resourceName(): string {
    return formatResourceName(this.selectedResource, this.workload, this.environment, this.region, this.instance, this);
  }

  propertyChanged(key, newValue: any, oldValue: any): void {
    console.log(`Property ${key} changed from ${oldValue} to ${newValue}`);
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.resourceName).then(_ => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
