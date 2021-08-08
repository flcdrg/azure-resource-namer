import {inject} from 'aurelia-framework';

export class ResourcetypeList {
  resourceTypeGroups: {
    name: string,
    resources: 
      {
        name: string;
        id: string;
      }[]    
  }[];
  
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
