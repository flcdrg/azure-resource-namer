import { IResource } from '../iresource';

export const storage = {
  // https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules#microsoftstorage
  category: 'Storage',
  assets: [
    {
      abbrev: 'st',
      name: 'Storage account',
      pattern: '{resource}{workload}{environment}{region}{instance}',
      minLength: 3,
      maxLength: 24,
      regex: /^[a-z0-9]+$/,
      description: 'Lowercase letters and numbers'
    },
    {
      abbrev: 'stc',
      name: 'Storage account blob container',
      pattern: '{workload}',
      minLength: 3,
      maxLength: 63
    },
    {
      abbrev: 'bvault',
      name: 'Backup Vault'
    },
    {
      abbrev: 'bkpol',
      name: 'Backup Vault policy'
    },
    {
      abbrev: 'share',
      name: 'File share'
    },
    {
      abbrev: 'sss',
      name: 'Storage Sync Service'
    },
  ] as IResource[]
};
