import React from 'react';
import {
  Stack,
  Typography,
  Button,
} from '@mui/material';
import HiveIcon from '@mui/icons-material/Hive';
import { projectColors } from 'assets/variables';
import ImagesField from './images-field';
import InventoryField from './inventory-field';
import PriceField from './price-field';
import TitleField from './title-field';
import * as Styled from './styled';

const ProductFormPage = () => (
  <Styled.PageLayout>
    <Styled.Paper
      elevation={6}
    >
      <Stack sx={{ gap: 2, alignItems: 'center' }} component="form">
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
    </Styled.Paper>
  </Styled.PageLayout>
);

export default ProductFormPage;
