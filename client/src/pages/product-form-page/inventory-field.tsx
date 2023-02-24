import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type InventoryFieldProps = {
  color: TextFieldProps['color'],
  defaultInventory?: string,
};

const InventoryField: React.FC<InventoryFieldProps> = ({
  color,
  defaultInventory,
}) => (
  <TextField
    label="Inventory"
    name="inventory"
    fullWidth
    variant="filled"
    size="small"
    color={color}
    defaultValue={defaultInventory}
  />
);

export default InventoryField;
