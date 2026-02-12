import { IResource } from '../iresource';

export const general = {
  category: 'General',
  assets: [
    {
      abbrev: 'apim',
      name: 'API management service instance',
      minLength: 1,
      maxLength: 50,
      description: 'Alphanumerics and hyphens. Start with letter and end with alphanumeric.',
      // https://docs.microsoft.com/en-us/rest/api/apimanagement/2021-04-01-preview/api-management-service/create-or-update#uri-parameters
      regex: /^[a-zA-Z](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/
    },
    {
      abbrev: 'id',
      name: 'Managed Identity',
      // https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules#microsoftmanagedidentity
      minLength: 3,
      maxLength: 128,
      description: 'Alphanumerics, hyphens, and underscores. Start with letter or number.',
      regex: /^[a-zA-Z](?:[a-zA-Z0-9-_]*)?$/
    },
    {
      abbrev: 'mg',
      name: 'Management group'        
    },
    {
      abbrev: 'policy',
      name: 'Policy definition',
      minLength: 1,
      maxLength: 64,
      description: 'Resource name can\'t use: <>*%&:?.+/ or control characters. Can\'t end with period or space.'
    },
    {
      abbrev: 'rg',
      name: 'Resource group',
      minLength: 1,
      maxLength: 90,
      // https://docs.microsoft.com/en-us/rest/api/resources/resource-groups/create-or-update#uri-parameters
      regex: /^[-\w._()]+$/,
      description: 'Alphanumerics, underscores, parentheses, hyphens, periods, and unicode characters that match the regex documentation. Can\'t end with period.'
    },
  ] as IResource[]
};
