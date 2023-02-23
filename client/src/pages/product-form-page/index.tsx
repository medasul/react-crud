import React from 'react';
import {
  Stack,
  Typography,
  Paper,
  Button,
} from '@mui/material';
import HiveIcon from '@mui/icons-material/Hive';
import { projectColors } from 'assets/variables';
import ImagesField from './images-field';
import InventoryField from './inventory-field';
import PriceField from './price-field';
import TitleField from './title-field';

const ProductFormPage = () => (
  <Stack sx={{
    py: { xs: 2, md: 6, xl: 10 },
    px: 2,
    alignItems: 'center',
    backgroundColor: projectColors.bg,
    height: '100vh',
  }}
  >
    <Paper
      component="form"
      elevation={6}
      sx={{
        p: 3,
        backgroundColor: projectColors.secondary,
        width: (theme) => ({ xs: 1, sm: theme.breakpoints.values.sm }),
      }}
    >
      <Stack sx={{ gap: 2, alignItems: 'center' }}>
        <HiveIcon sx={{ fontSize: 60, color: projectColors.primary }} />
        <Typography variant="h4" sx={{ color: projectColors.primary }}>Create new product</Typography>

        <TitleField />
        <PriceField />
        <InventoryField />
        <ImagesField />

        <Button
          variant="contained"
          sx={{
            backgroundColor: projectColors.primary,
            '&:hover': {
              backgroundColor: projectColors.primary,
              color: projectColors.hoverAndActive,
            },
          }}
          size="large"
          fullWidth
        >
          Create
        </Button>
      </Stack>
    </Paper>
  </Stack>
);

export default ProductFormPage;
