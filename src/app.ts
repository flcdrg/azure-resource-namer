import { Workload } from './workload';
import {computedFrom, inject} from 'aurelia-framework';
import {NewInstance} from 'aurelia-dependency-injection';
import { faCopy, faCheckSquare, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { IResource } from 'resourcetype-list';
import { ValidationController } from 'aurelia-validation';
import { formatResourceName, IFeedback } from 'formatting';

@inject(NewInstance.of(ValidationController))
export class App implements IFeedback {
  thingy: string;
  lastName: string;
  instance: number;
  environment: string;
  region: string;
  selectedResource: IResource;
  message: string;
  workload: string;
  copied: boolean;
  resourceNameValid: boolean;
  validationFeedback: string;
  includeRegion: boolean;

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
    this.thingy = 'ah';
    this.resourceNameValid = true;
    this.includeRegion = true;
  }

  @computedFrom('selectedResource', 'environment', 'region', 'workload', 'includeRegion', 'instance')
  get resourceName(): string {
    return formatResourceName(this.selectedResource, this.workload, this.environment, this.region, this.instance, this.includeRegion, this);
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.resourceName).then(_ => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
