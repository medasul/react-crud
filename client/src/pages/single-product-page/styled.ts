import { styled, Box } from '@mui/material';

export const SwiperImageContent = styled(Box)(({ theme }) => ({
  
    width: 600,
    height: 400,
    margin: 'auto',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        width: 400,
      },
    [theme.breakpoints.up('sm')]: {
        width: 500
      },
      [theme.breakpoints.up('md')]: {
        width: 600
      },
      
}
));