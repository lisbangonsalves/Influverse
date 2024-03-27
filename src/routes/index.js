import { useRoutes } from 'react-router-dom';

// routes
import InfluencerRoutes from './influencerRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import LangdingRoutes from './InitialRoutes';
import BusinessRoutes from './BusinessRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([LangdingRoutes,InfluencerRoutes,BusinessRoutes, AuthenticationRoutes]);
}
