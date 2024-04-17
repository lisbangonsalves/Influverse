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
      id: 'campaign',
      title: 'Campaign',
      type: 'item',
      icon: icons.IconSpeakerphone,
      url: '/influencer/campaign',
    }
  ]
};

export default pages;
