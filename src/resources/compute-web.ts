import { IResource } from '../iresource';

export const computeWeb = {
  category: 'Compute and Web',
  assets: [
    {
      abbrev: 'ase',
      name: 'App Service environment'
    },
    {
      abbrev: 'asp',
      name: 'App Service plan'
    },
    {
      abbrev: 'app',
      name: 'Web app',
      minLength: 2,
      maxLength: 60,
      description: 'Alphanumeric, hyphens and Unicode characters that can be mapped to Punycode. Can\'t start or end with hyphen.'
    },
    {
      abbrev: 'arcgw',
      name: 'Azure Arc gateway'
    },
    {
      abbrev: 'arcs',
      name: 'Azure Arc enabled server'
    },
    {
      abbrev: 'arck',
      name: 'Azure Arc enabled Kubernetes cluster'
    },
    {
      abbrev: 'avail',
      name: 'Availability set'
    },
    {
      abbrev: 'ba',
      name: 'Batch account'
    },
    {
      abbrev: 'cld',
      name: 'Cloud service'
    },
    {
      abbrev: 'des',
      name: 'Disk encryption set'
    },
    {
      abbrev: 'func',
      name: 'Function app',
      minLength: 2,
      maxLength: 60
    },
    {
      abbrev: 'gal',
      name: 'Gallery'
    },
    {
      abbrev: 'host',
      name: 'Hosting environment'
    },
    {
      abbrev: 'it',
      name: 'Image template'
    },
    {
      abbrev: 'lt',
      name: 'Load Testing instance'
    },
    {
      abbrev: 'mc',
      name: 'VM maintenance configuration'
    },
    {
      abbrev: 'osdisk',
      name: 'Managed disk (OS)'
    },
    {
      abbrev: 'disk',
      name: 'Managed disk (data)'
    },
    {
      abbrev: 'ntf',
      name: 'Notification Hubs'
    },
    {
      abbrev: 'ntfns',
      name: 'Notification Hubs namespace'
    },
    {
      abbrev: 'ppg',
      name: 'Proximity placement group'
    },
    {
      abbrev: 'rpc',
      name: 'Restore point collection'
    },
    {
      abbrev: 'snap',
      name: 'Snapshot'
    },
    {
      abbrev: 'stapp',
      name: 'Static web app'
    },
    {
      abbrev: 'vm',
      name: 'Virtual machine',
      minLength: 1,
      maxLength: 64,
      description: 'Can\'t use spaces, control characters, or these characters: ~ ! @ # $ % ^ & * ( ) = + _ [ ] { } \\ | ; : . \' " , < > / ?\n Windows VMs can\'t include period or end with hyphen. \nLinux VMs can\'t end with period or hyphen.'
    },
    {
      abbrev: 'vmss',
      name: 'Virtual machine scale set'
    },
    {
      abbrev: 'stvm',
      name: 'VM storage account'
    },
    {
      abbrev: 'acs',
      name: 'Communication Services'
    },
  ] as IResource[]
};
