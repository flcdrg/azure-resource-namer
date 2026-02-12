import { IResource } from '../iresource';

export const containers = {
  category: 'Containers',
  assets: [
    {
      abbrev: 'aks',
      name: 'AKS cluster',
      regex: /^[a-zA-Z0-9]$|^[a-zA-Z0-9][-_a-zA-Z0-9]{0,61}[a-zA-Z0-9]$/ //https://learn.microsoft.com/en-us/rest/api/aks/managed-clusters/create-or-update?tabs=HTTP#uri-parameters
    },
    {
      abbrev: 'np',
      name: 'AKS user node pool'
    },
    {
      abbrev: 'npsystem',
      name: 'AKS system node pool'
    },
    {
      abbrev: 'ca',
      name: 'Container Apps'
    },
    {
      abbrev: 'cae',
      name: 'Container Apps Environment'
    },
    {
      abbrev: 'caj',
      name: 'Container Apps Job'
    },
    {
      // https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules#microsoftcontainerregistry
      abbrev: 'cr',
      name: 'Container registry',
      minLength: 5,
      maxLength: 50,
      regex: /^[a-zA-Z0-9]*$/, // https://learn.microsoft.com/en-us/rest/api/containerregistry/registries/create?tabs=HTTP#uri-parameters
      description: 'Alphanumerics',
      pattern: '{resource}{workload}{environment}{region}{instance}'
    },
    {
      // https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules#microsoftcontainerinstance
      abbrev: 'ci',
      name: 'Container instance',
      minLength: 1,
      maxLength: 63,
      description: 'Lowercase letters, numbers, and hyphens. Can\'t start or end with hyphen. Consecutive hyphens aren\'t allowed'
    },
    {
      abbrev: 'sf',
      name: 'Service Fabric cluster'
    },
    {
      abbrev: 'sfmc',
      name: 'Service Fabric managed cluster'
    },
  ] as IResource[]
};
