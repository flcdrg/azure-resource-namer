import { IResource } from '../iresource';

export const managementGovernance = {
  category: 'Management and governance',
  assets: [
    {
      abbrev: 'aa',
      name: 'Automation account'
    },
    {
      abbrev: 'appi',
      name: 'Application Insights'
    },
    {
      abbrev: 'ag',
      name: 'Azure Monitor action group'
    },
    {
      abbrev: 'apr',
      name: 'Azure Monitor alert processing rule'
    },
    {
      abbrev: 'dcr',
      name: 'Azure Monitor data collection rule'
    },
    {
      abbrev: 'dce',
      name: 'Data collection endpoint'
    },
    {
      abbrev: 'pview',
      name: 'Azure Purview instance'
    },
    {
      abbrev: 'bp',
      name: 'Blueprint'
    },
    {
      abbrev: 'bpa',
      name: 'Blueprint assignment'
    },
    {
      abbrev: 'pack',
      name: 'Log Analytics query packs'
    },
    {
      abbrev: 'log',
      name: 'Log Analytics workspace'
    },
    {
      abbrev: 'script',
      name: 'Deployment scripts'
    },
    {
      abbrev: 'ts',
      name: 'Template specs name'
    },
  ] as IResource[]
};
