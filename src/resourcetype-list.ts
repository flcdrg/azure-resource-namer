import { resources } from './resources';
import { IResource } from './iresource';
import { bindable, BindingMode } from 'aurelia';

export class ResourcetypeList {

  @bindable({ mode: BindingMode.twoWay }) resource: IResource;

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
