import { bindable, bindingMode } from 'aurelia-framework';

export class ResourcetypeList {
  resourceTypeGroups: {
    name: string,
    resources: 
      {
        name: string;
        id: string;
      }[]    
  }[];

  @bindable({ defaultBindingMode: bindingMode.twoWay }) resource: string;

  constructor() {
    this.resourceTypeGroups = [
      {
        name: "General",
        resources: [
          {
            name: "API Management",
            id: "apim"
          },
          {
            name: "Resource Group",
            id: "rg"
          }
        ]
      }, 
      {
        name: "Networking",
        resources: [
          {
            name: "Application gateway",
            id: "ag"
          }
        ]
      }
    ];
  }
}
