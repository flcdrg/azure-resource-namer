import { resources } from './resources';
import { IResource } from './iresource';
import { bindable } from 'aurelia';

export class ResourcetypeList {

  @bindable resource: IResource;

  selectedTheme: any;
  resources: {
    category: string;
    assets: IResource[]
  }[];

  resourceMatcher = (a: IResource, b: IResource) => a && b && a.abbrev === b.abbrev;

  constructor() {
    this.resources = resources;
  }
}
