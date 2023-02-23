import React from 'react';
import { TextField } from '@mui/material';

const PriceField = () => (
  <TextField
    label="Price"
    type="number"
    inputProps={{ step: '0.01' }}
    fullWidth
    variant="filled"
    size="small"
  />
);

export default PriceField;
