// assets
import { IconBrandCashapp, IconShadow, IconWindmill, IconGift } from '@tabler/icons-react';

// constant
const icons = {
  IconBrandCashapp,
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
      id: 'earnings',
      title: 'Earnings',
      type: 'item',
      url: '/view/explore',
      icon: icons.IconBrandCashapp,
      breadcrumbs: false
    },
    {
      id: 'gifts',
      title: 'Gifts',
      type: 'item',
      url: '/influencer/gifting',
      icon: icons.IconGift,
      breadcrumbs: false
    },
    {
      id: 'events',
      title: 'Events',
      type: 'item',
      icon: icons.IconWindmill,
      url: '/influencer/event',
    }
  ]
};

export default utilities;
