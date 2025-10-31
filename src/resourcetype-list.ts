import { resources } from 'resources';

export interface IResource {
  abbrev: string;
  name: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  regex?: RegExp;
  description?: string;
}

export class ResourcetypeList {

  resource: IResource;

  selectedTheme: any;
  resources: {
    category: string;
    assets: IResource[]
  }[];

  resourceMatcher = (a: IResource, b: IResource) => a.abbrev === b.abbrev;

  constructor() {
    this.resources = resources;
  }
}
