import { IResource } from '../iresource';

export const security = {
  category: 'Security',
  assets: [
    {
      abbrev: 'bas',
      name: 'Azure Bastion'
    },
    {
      // https://docs.microsoft.com/azure/azure-resource-manager/management/resource-name-rules?WT.mc_id=DOP-MVP-5001655#microsoftkeyvault
      abbrev: 'kv',
      name: 'Key vault',
      minLength: 3,
      maxLength: 24,
      // https://docs.microsoft.com/en-us/rest/api/keyvault/keyvault/vaults/create-or-update?tabs=HTTP
      regex: /^[a-zA-Z0-9-]{3,24}$/,
      description: 'Alphanumerics and hyphens. Start with letter. End with letter or digit. Can\'t contain consecutive hyphens.'
    },
    {
      abbrev: 'kvmhsm',
      name: 'Key Vault Managed HSM'
    },
    {
      abbrev: 'sshkey',
      name: 'SSH key'
    },
    {
      abbrev: 'vpng',
      name: 'VPN Gateway'
    },
    {
      abbrev: 'vcn',
      name: 'VPN connection'
    },
    {
      abbrev: 'vst',
      name: 'VPN site'
    },
    {
      abbrev: 'waf',
      name: 'Web Application Firewall (WAF) policy'
    },
    {
      abbrev: 'wafrg',
      name: 'Web Application Firewall (WAF) policy rule group'
    },
  ] as IResource[]
};
