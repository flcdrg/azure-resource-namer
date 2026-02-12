import { IResource } from '../iresource';

export const virtualDesktop = {
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
    {
      abbrev: 'vdscaling',
      name: 'Virtual desktop scaling plan'
    },
  ] as IResource[]
};
