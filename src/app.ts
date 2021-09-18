import {computedFrom, inject} from 'aurelia-framework';
import {NewInstance} from 'aurelia-dependency-injection';
import { faCopy, faCheckSquare, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { IResource } from 'resourcetype-list';
import { ValidationController } from 'aurelia-validation';
require('format-unicorn');

@inject(NewInstance.of(ValidationController))
export class App {
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
  }

  @computedFrom('selectedResource', 'environment', 'region', 'workload', 'instance')
  get resourceName(): string {

    let pattern = this.selectedResource.pattern ?? '{resource}-{workload}-{environment}-{region}'

    if (this.instance > 0) {
      pattern += this.selectedResource.instanceSuffix ?? '-{instance}'
    }

    const name = pattern.formatUnicorn({ resource: this.selectedResource.abbrev, workload: this.workload, environment: this.environment, region: this.region, instance: String(this.instance).padStart(3, '0') });

    if (name.length > this.selectedResource?.maxLength) {
      this.validationFeedback = `Length exceeds maximum ${this.selectedResource.maxLength} characters`;
      this.resourceNameValid = false;

    } else if (this.selectedResource.regex && !this.selectedResource.regex?.test(name)) {
      this.validationFeedback = 'Name must only contain: ' + this.selectedResource.description ?? this.selectedResource.regex.source;
      this.resourceNameValid = false;

    } else {
      this.resourceNameValid = true;
    }
    return name;
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.resourceName).then(_ => {
      this.copied = true;
      setTimeout(() => this.copied = false, 2000);
    });
  }
}
