import { styled, Stack } from '@mui/material';

export const ProductsGrid = styled('div')(({ theme }) => (
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: theme.spacing(2), //  gap: 1rem;
    padding: theme.spacing(2), //  gap: 1rem;
    maxWidth: theme.breakpoints.values.xl, // $xxl,
    margin: 'auto',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },

    /* @media (min-width: $sm) {
      grid-template-columns: repeat(2, 1fr),
    }
    @media (min-width: $md) {
      grid-template-columns: repeat(3, 1fr),
    }
    @media (min-width: $lg) {
      grid-template-columns: repeat(4, 1fr),
    } */
}
));

export const ProductCardContent = styled(Stack)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(1, 2, 2),
}));

export const ProductCardBottomContent = styled('div')({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '15px',
});

export const ProductCardInventory = styled('div')({
  fontSize: '1rem',
  color: 'text.secondary',
  fontWeight: 600,
  marginBottom: '0.5rem',
  component: 'span',
});