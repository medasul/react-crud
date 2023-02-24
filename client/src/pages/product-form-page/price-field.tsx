import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type PriceFieldProps = {
  color: TextFieldProps['color'],
  defaultPrice?: string,
};

const PriceField: React.FC<PriceFieldProps> = ({
  color,
  defaultPrice,
}) => (
  <TextField
    label="Price"
    name="price"
    type="number"
    inputProps={{ step: '0.01' }}
    fullWidth
    variant="filled"
    size="small"
    color={color}
    defaultValue={defaultPrice}
  />
);

export default PriceField;
