import { IResource } from '../iresource';

export const migration = {
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
  ] as IResource[]
};
