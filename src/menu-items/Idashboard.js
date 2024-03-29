// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  // title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Influencer',
      type: 'item',
      url: '/influencer/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    
  ]
};

export default dashboard;
