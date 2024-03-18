// assets
import { IconWorld, IconShadow, IconWindmill, IconGift } from '@tabler/icons-react';

// constant
const icons = {
  IconWorld,
  IconShadow,
  IconWindmill,
  IconGift
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  // title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'explore',
      title: 'Explore',
      type: 'item',
      url: '/view/explore',
      icon: icons.IconWorld,
      breadcrumbs: false
    },
    {
      id: 'influvencer-gifting',
      title: 'Influvencer Gifting',
      type: 'item',
      url: '/view/gifting/influencerlist',
      icon: icons.IconGift,
      breadcrumbs: false
    },
    {
      id: 'events',
      title: 'Events',
      type: 'item',
      icon: icons.IconWindmill,
      url: '/view/event/create-event',
    }
  ]
};

export default utilities;
