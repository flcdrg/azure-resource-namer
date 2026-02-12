// REST API docs contain most info about min/max length and regexes - https://docs.microsoft.com/en-us/rest/api/azure/
// Resource naming restrictions - https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules 
// Azure CAF resource abbreviations - https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations

import { general } from './general';
import { networking } from './networking';
import { computeWeb } from './compute-web';
import { containers } from './containers';
import { databases } from './databases';
import { storage } from './storage';
import { aiMl } from './ai-ml';
import { analyticsIot } from './analytics-iot';
import { virtualDesktop } from './virtual-desktop';
import { developerTools } from './developer-tools';
import { integration } from './integration';
import { managementGovernance } from './management-governance';
import { security } from './security';
import { devops } from './devops';
import { migration } from './migration';

export const resources = [
  general,
  networking,
  computeWeb,
  containers,
  databases,
  storage,
  aiMl,
  analyticsIot,
  virtualDesktop,
  developerTools,
  integration,
  managementGovernance,
  security,
  devops,
  migration,
];
