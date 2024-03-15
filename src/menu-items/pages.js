// assets
import { IconSpeakerphone } from '@tabler/icons-react';

// constant
const icons = {
  IconSpeakerphone
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  // title: 'Pages',
  type: 'group',
  children: [
    {
      id: 'collapse',
      title: 'Campaign',
      type: 'collapse',
      icon: icons.IconSpeakerphone,

      children: [
        {
          id: 'viewcampaign',
          title: 'View Campaign',
          type: 'item',
          url: '/view/campaign/campaign-list',
          // target: true
        },
        {
          id: 'createcampaign',
          title: 'Create Campaign',
          type: 'item',
          url: '/view/campaign/create-campaign',
          // target: true
        }
      ]
    }
  ]
};

export default pages;
