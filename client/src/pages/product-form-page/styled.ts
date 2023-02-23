import {
  styled,
  Stack,
  Paper as MuiPaper,
} from '@mui/material';
import { projectColors } from 'assets/variables';

export const PageLayout = styled(Stack)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: projectColors.bg,
  height: '100vh',
  // eslint-disable-next-line max-len, no-trailing-spaces
  padding: theme.spacing(2), // buvo xs:2, tai reiskia visu ekrano dydziu (py: { xs: 2, md: 6, xl: 10 },) 
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(6), // reik atskirai, kad nepazeist paddingo sonu
    paddingRight: theme.spacing(6),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  [theme.breakpoints.up('xl')]: {
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

export const Paper = styled(MuiPaper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: projectColors.secondary,
  //  width: (theme) => ({ xs: 1, sm: theme.breakpoints.values.sm })
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: theme.breakpoints.values.sm,
  },
}));


// *ProductFormPage, ne HouseFormPage, sekiau pamokos įrašą ir kartu pasileidus commita ta pati koki pasaket irasiau 