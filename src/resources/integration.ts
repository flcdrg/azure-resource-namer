import { IResource } from '../iresource';

export const integration = {
  category: 'Integration',
  assets: [
    {
      abbrev: 'ia',
      name: 'Integration account'
    },
    {
      abbrev: 'logic',
      name: 'Logic apps'
    },
    {
      abbrev: 'sbns',
      name: 'Service Bus namespace'
    },
    {
      abbrev: 'sbq',
      name: 'Service Bus queue'
    },
    {
      abbrev: 'sbt',
      name: 'Service Bus topic'
    },
    {
      abbrev: 'sbts',
      name: 'Service Bus topic subscription'
    },
  ] as IResource[]
};
