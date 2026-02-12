import { IResource } from '../iresource';

export const databases = {
  category: 'Databases',
  assets: [
    {
      abbrev: 'cosmos',
      name: 'Azure Cosmos DB database'
    },
    {
      abbrev: 'cosno',
      name: 'Azure Cosmos DB for NoSQL'
    },
    {
      abbrev: 'cosmon',
      name: 'Azure Cosmos DB for MongoDB'
    },
    {
      abbrev: 'costab',
      name: 'Azure Cosmos DB for Table'
    },
    {
      abbrev: 'coscas',
      name: 'Azure Cosmos DB for Apache Cassandra'
    },
    {
      abbrev: 'cosgrm',
      name: 'Azure Cosmos DB for Apache Gremlin'
    },
    {
      abbrev: 'cospos',
      name: 'Azure Cosmos DB PostgreSQL cluster'
    },
    {
      abbrev: 'redis',
      name: 'Azure Cache for Redis instance'
    },
    {
      abbrev: 'amr',
      name: 'Azure Managed Redis'
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
      abbrev: 'sqlja',
      name: 'Azure SQL Elastic Job agent'
    },
    {
      abbrev: 'sqlep',
      name: 'Azure SQL Elastic Pool'
    },
    {
      abbrev: 'sqlmi',
      name: 'SQL Managed Instance'
    },
    {
      abbrev: 'sqlstrdb',
      name: 'SQL Server Stretch Database'
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
  ] as IResource[]
};
