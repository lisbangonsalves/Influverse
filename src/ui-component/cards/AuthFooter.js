// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" >
      Influverse
    </Typography>
    <Typography variant="subtitle2" component={Link} href="https://lisbangonsalves.github.io/My-Portfolio/" target="_blank" underline="hover">
      &copy; Influverse.com
    </Typography>
  </Stack>
);

export default AuthFooter;
