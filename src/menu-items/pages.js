// assets
import { IconSpeakerphone } from '@tabler/icons-react';

// constant
const icons = {
  IconSpeakerphone
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'campaign',
      title: 'Campaign',
      type: 'collapse',
      icon: icons.IconSpeakerphone,

      children: [
        {
          id: 'login3',
          title: 'View Campaign',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'createcampaign',
          title: 'Create Campaign',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    }
  ]
};

export default pages;
