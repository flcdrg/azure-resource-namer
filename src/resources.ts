import { IResource } from 'resourcetype-list';
// REST API docs contain most info about min/max length and regexes - https://docs.microsoft.com/en-us/rest/api/azure/
// Resource naming restrictions - https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-name-rules 

export const resources : 
  { 
    category: string, 
    assets: IResource[] 
  }[] = [
  {
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
        description: 'Resource name can\'t use: <>*%&:\?.+/ or control characters. Can\'t end with period or space.'
      },
      {
        abbrev: 'rg',
        name: 'Resource group',
        minLength: 1,
        maxLength: 90,
        // https://docs.microsoft.com/en-us/rest/api/resources/resource-groups/create-or-update#uri-parameters
        regex: /^[-\w\._\(\)]+$/,
        description: 'Alphanumerics, underscores, parentheses, hyphens, periods, and unicode characters that match the regex documentation. Can\'t end with period.'
      },
    ]
  },
  {
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
        abbrev: 'bas',
        name: 'Bastion'
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
        abbrev: 'fd',
        name: 'Front Door instance'
      },
      {
        abbrev: 'fdfp',
        name: 'Front Door firewall policy'
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
        abbrev: 'nw',
        name: 'Network Watcher'
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
        abbrev: 'rf',
        name: 'Route filter'
      },
      {
        abbrev: 'rt',
        name: 'Route table'
      },
      {
        abbrev: 'se',
        name: 'Service endpoint'
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
        abbrev: 'vgw',
        name: 'Virtual network gateway'
      },
      {
        abbrev: 'waf',
        name: 'Web Application Firewall (WAF) policy'
      },
      {
        abbrev: 'wafrg',
        name: 'Web Application Firewall (WAF) policy rule group'
      },
    ]
  },
  {
    category: 'Compute and Web',
    assets: [
      {
        abbrev: 'ase',
        name: 'App Service environment'
      },
      {
        abbrev: 'plan',
        name: 'App Service plan'
      },
      {
        abbrev: 'avail',
        name: 'Availability set'
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
        abbrev: 'cld',
        name: 'Cloud service'
      },
      {
        abbrev: 'des',
        name: 'Disk encryption set'
      },
      {
        abbrev: 'func',
        name: 'Function app'
      },
      {
        abbrev: 'gal',
        name: 'Gallery'
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
        abbrev: 'snap',
        name: 'Snapshot'
      },
      {
        abbrev: 'stapp',
        name: 'Static web app'
      },
      {
        abbrev: 'vm',
        name: 'Virtual machine'
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
        abbrev: 'app',
        name: 'Web app'
      },
    ]
  },
  {
    category: 'Containers',
    assets: [
      {
        abbrev: 'aks',
        name: 'AKS cluster'
      },
      {
        abbrev: 'cr',
        name: 'Container registry'
      },
      {
        abbrev: 'ci',
        name: 'Container instance'
      },
      {
        abbrev: 'sf',
        name: 'Service Fabric cluster'
      },
    ]
  },
  {
    category: 'Databases',
    assets: [
      {
        abbrev: 'cosmos',
        name: 'Azure Cosmos DB database'
      },
      {
        abbrev: 'redis',
        name: 'Azure Cache for Redis instance'
      },
      {
        abbrev: 'sql',
        name: 'Azure SQL Database server'
      },
      {
        abbrev: 'sqldb',
        name: 'Azure SQL database'
      },
      {
        abbrev: 'syn',
        name: 'Azure Synapse Analytics'
      },
      {
        abbrev: 'synw',
        name: 'Azure Synapse Analytics Workspaces'
      },
      {
        abbrev: 'syndp',
        name: 'Azure Synapse Analytics SQL Dedicated Pool'
      },
      {
        abbrev: 'synsp',
        name: 'Azure Synapse Analytics Spark Pool'
      },
      {
        abbrev: 'mysql',
        name: 'MySQL database'
      },
      {
        abbrev: 'psql',
        name: 'PostgreSQL database'
      },
      {
        abbrev: 'sqlstrdb',
        name: 'SQL Server Stretch Database'
      },
      {
        abbrev: 'sqlmi',
        name: 'SQL Managed Instance'
      },
    ]
  },
  {
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
        abbrev: 'ssimp',
        name: 'Azure StorSimple'
      },
    ]
  },
  {
    category: 'AI and Machine Learning',
    assets: [
      {
        abbrev: 'srch',
        name: 'Azure Cognitive Search'
      },
      {
        abbrev: 'cog',
        name: 'Azure Cognitive Services'
      },
      {
        abbrev: 'mlw',
        name: 'Azure Machine Learning workspace'
      },
    ]
  },
  {
    category: 'Analytics and IoT',
    assets: [
      {
        abbrev: 'as',
        name: 'Azure Analysis Services server'
      },
      {
        abbrev: 'dbw',
        name: 'Azure Databricks workspace'
      },
      {
        abbrev: 'asa',
        name: 'Azure Stream Analytics'
      },
      {
        abbrev: 'dec',
        name: 'Azure Data Explorer cluster'
      },
      {
        abbrev: 'dedb',
        name: 'Azure Data Explorer cluster database'
      },
      {
        abbrev: 'adf',
        name: 'Azure Data Factory'
      },
      {
        abbrev: 'dls',
        name: 'Data Lake Store account'
      },
      {
        abbrev: 'dla',
        name: 'Data Lake Analytics account'
      },
      {
        abbrev: 'evhns',
        name: 'Event Hubs namespace'
      },
      {
        abbrev: 'evh',
        name: 'Event hub'
      },
      {
        abbrev: 'evgd',
        name: 'Event Grid domain'
      },
      {
        abbrev: 'evgs',
        name: 'Event Grid subscriptions'
      },
      {
        abbrev: 'evgt',
        name: 'Event Grid topic'
      },
      {
        abbrev: 'hadoop',
        name: 'HDInsight - Hadoop cluster'
      },
      {
        abbrev: 'hbase',
        name: 'HDInsight - HBase cluster'
      },
      {
        abbrev: 'kafka',
        name: 'HDInsight - Kafka cluster'
      },
      {
        abbrev: 'spark',
        name: 'HDInsight - Spark cluster'
      },
      {
        abbrev: 'storm',
        name: 'HDInsight - Storm cluster'
      },
      {
        abbrev: 'mls',
        name: 'HDInsight - ML Services cluster'
      },
      {
        abbrev: 'iot',
        name: 'IoT hub'
      },
      {
        abbrev: 'provs',
        name: 'Provisioning services'
      },
      {
        abbrev: 'pcert',
        name: 'Provisioning services certificate'
      },
      {
        abbrev: 'pbi',
        name: 'Power BI Embedded'
      },
      {
        abbrev: 'tsi',
        name: 'Time Series Insights environment'
      },
    ]
  },
  {
    category: 'Azure Virtual Desktop',
    assets: [
      {
        abbrev: 'vdpool',
        name: 'Virtual desktop host pool'
      },
      {
        abbrev: 'vdag',
        name: 'Virtual desktop application group'
      },
      {
        abbrev: 'vdws',
        name: 'Virtual desktop workspace'
      },
    ]
  },
  {
    category: 'Developer tools',
    assets: [
      {
        abbrev: 'appcs',
        name: 'App Configuration store'
      },
      {
        abbrev: 'sigr',
        name: 'SignalR'
      },
    ]
  },
  {
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
        abbrev: 'sb',
        name: 'Service Bus'
      },
      {
        abbrev: 'sbq',
        name: 'Service Bus queue'
      },
      {
        abbrev: 'sbt',
        name: 'Service Bus topic'
      },
    ]
  },
  {
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
        // https://docs.microsoft.com/azure/azure-resource-manager/management/resource-name-rules?WT.mc_id=DOP-MVP-5001655#microsoftkeyvault
        abbrev: 'kv',
        name: 'Key vault',
        minLength: 3,
        maxLength: 24,
        // https://docs.microsoft.com/en-us/rest/api/keyvault/keyvault/vaults/create-or-update?tabs=HTTP
        regex: /^[a-zA-Z0-9-]{3,24}$/
      },
      {
        abbrev: 'log',
        name: 'Log Analytics workspace'
      },
    ]
  },
  {
    category: 'Migration',
    assets: [
      {
        abbrev: 'migr',
        name: 'Azure Migrate project'
      },
      {
        abbrev: 'dms',
        name: 'Database Migration Service instance'
      },
      {
        abbrev: 'rsv',
        name: 'Recovery Services vault'
      },
    ]
  },
  {
    category: 'Deprecated product names',
    assets: [
      {
        abbrev: 'sqldw',
        name: 'Azure SQL Data Warehouse'
      },
    ]
  },
];
