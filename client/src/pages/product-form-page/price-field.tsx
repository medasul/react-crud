import React from 'react';
import { TextField } from '@mui/material';

const PriceField = () => (
  <TextField
    label="Price"
    name="price"
    type="number"
    inputProps={{ step: '0.01' }}
    fullWidth
    variant="filled"
    size="small"
  />
);

export default PriceField;
