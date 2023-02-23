import { Theme } from '@mui/material';
import { projectColors } from 'assets/variables';

export const navbarDesktopItemStyles = (theme: Theme) => ({
  alignSelf: 'stretch',
  padding: theme.spacing(0, 2),
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.grey[200],
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.common.white,
    color: projectColors.hoverAndActive,
  },
  '&.active': {
    boxShadow: `inset 0 -5px 0 ${projectColors.hoverAndActive}`,
  },
});
