import { IResource } from '../iresource';

export const networking = {
  category: 'Networking',
  assets: [
    {
      abbrev: 'agw',
      name: 'Application gateway'
    },
    {
      abbrev: 'asg',
      name: 'Application security group (ASG)'
    },
    {
      abbrev: 'afd',
      name: 'Front Door Standard/Premium instance'
    },
    {
      abbrev: 'fde',
      name: 'Front Door Standard/Premium endpoint'
    },
    {
      abbrev: 'cdnp',
      name: 'CDN profile'
    },
    {
      abbrev: 'cdne',
      name: 'CDN endpoint'
    },
    {
      abbrev: 'con',
      name: 'Connections'
    },
    {
      abbrev: 'dnsz',
      name: 'DNS'
    },
    {
      abbrev: 'pdnsz',
      name: 'DNS zone'
    },
    {
      abbrev: 'dnsfrs',
      name: 'DNS forwarding ruleset'
    },
    {
      abbrev: 'dnspr',
      name: 'DNS private resolver'
    },
    {
      abbrev: 'in',
      name: 'DNS private resolver inbound endpoint'
    },
    {
      abbrev: 'out',
      name: 'DNS private resolver outbound endpoint'
    },
    {
      abbrev: 'afw',
      name: 'Firewall'
    },
    {
      abbrev: 'afwp',
      name: 'Firewall policy'
    },
    {
      abbrev: 'erc',
      name: 'ExpressRoute circuit'
    },
    {
      abbrev: 'erd',
      name: 'ExpressRoute direct'
    },
    {
      abbrev: 'ergw',
      name: 'ExpressRoute gateway'
    },
    {
      abbrev: 'lbi',
      name: 'Load balancer (internal)'
    },
    {
      abbrev: 'lbe',
      name: 'Load balancer (external)'
    },
    {
      abbrev: 'rule',
      name: 'Load balancer rule'
    },
    {
      abbrev: 'lgw',
      name: 'Local network gateway'
    },
    {
      abbrev: 'ng',
      name: 'NAT gateway'
    },
    {
      abbrev: 'nic',
      name: 'Network interface (NIC)'
    },
    {
      abbrev: 'nsg',
      name: 'Network security group (NSG)'
    },
    {
      abbrev: 'nsgsr',
      name: 'Network security group (NSG) security rules'
    },
    {
      abbrev: 'nsp',
      name: 'Network security perimeter'
    },
    {
      abbrev: 'nw',
      name: 'Network Watcher'
    },
    {
      abbrev: 'pep',
      name: 'Private endpoint'
    },
    {
      abbrev: 'pl',
      name: 'Private Link'
    },
    {
      abbrev: 'pip',
      name: 'Public IP address'
    },
    {
      abbrev: 'ippre',
      name: 'Public IP address prefix'
    },
    {
      abbrev: 'ipg',
      name: 'IP group'
    },
    {
      abbrev: 'rf',
      name: 'Route filter'
    },
    {
      abbrev: 'rt',
      name: 'Route table'
    },
    {
      abbrev: 'rtserv',
      name: 'Route server'
    },
    {
      abbrev: 'se',
      name: 'Service endpoint'
    },
    {
      abbrev: 'subnet',
      name: 'Subnet',
      minLength: 1,
      maxLength: 80,
      description: 'Alphanumerics, underscores, periods, and hyphens. Start with alphanumeric. End alphanumeric or underscore.',
      regex: /^[a-zA-Z]$|^[a-zA-Z0-9][a-zA-Z0-9-_.]{0,78}[a-zA-Z0-9_]$/
    },
    {
      abbrev: 'traf',
      name: 'Traffic Manager profile'
    },
    {
      abbrev: 'udr',
      name: 'User defined route (UDR)'
    },
    {
      abbrev: 'vnet',
      name: 'Virtual network'
    },
    {
      abbrev: 'vnm',
      name: 'Virtual network manager'
    },
    {
      abbrev: 'peer',
      name: 'Virtual network peering'
    },
    {
      abbrev: 'snet',
      name: 'Virtual network subnet'
    },
    {
      abbrev: 'vwan',
      name: 'Virtual WAN'
    },
    {
      abbrev: 'vhub',
      name: 'Virtual WAN Hub'
    },
    {
      abbrev: 'vgw',
      name: 'Virtual network gateway'
    },
  ] as IResource[]
};
