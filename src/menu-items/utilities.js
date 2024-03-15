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
      url: '/utils/util-shadow',
      icon: icons.IconGift,
      breadcrumbs: false
    },
    {
      id: 'collapse',
      title: 'Events',
      type: 'collapse',
      icon: icons.IconWindmill,
      children: [
        {
          id: 'create-event',
          title: 'Create Event',
          type: 'item',
          url: '/view/event/create-event',
          breadcrumbs: false
        },
        {
          id: 'view-event',
          title: 'View Event',
          type: 'item',
          external: true,
          target: '_blank',
          url: 'https://mui.com/material-ui/material-icons/',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default utilities;
