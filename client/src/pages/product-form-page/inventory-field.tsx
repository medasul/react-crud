import React, { useState } from 'react';
import {
  Select, SelectProps, SelectChangeEvent, MenuItem, TextField,
} from '@mui/material';

type InventoryFieldProps = {
  color: SelectProps['color'],
  defaultInventory?: { status: string, units: number },
};

const InventoryField: React.FC<InventoryFieldProps> = ({
  color,
  defaultInventory,
}) => {
  const [inventory, setInventory] = useState<{ status: string, units: number }>({
    status: defaultInventory?.status || 'Out of stock',
    units: defaultInventory?.units || 0,
  });

  const handleInventoryChange = (event: SelectChangeEvent<string>) => {
    const inventoryStatus = event.target.value;
    setInventory((prevInventory) => ({
      ...prevInventory,
      status: inventoryStatus,
      units: inventoryStatus === 'Out of stock' ? 0 : prevInventory.units,
    }));
  };

  const handleUnitsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inventoryUnits = parseInt(event.target.value, 10) || 0;
    setInventory((prevInventory) => ({
      ...prevInventory,
      units: inventoryUnits,
    }));
  };

  return (
    <>
      <Select
        label="Inventory"
        name="inventory"
        fullWidth
        variant="filled"
        size="small"
        color={color}
        value={inventory.status}
        onChange={handleInventoryChange}
      >
        <MenuItem value="In stock">In stock</MenuItem>
        <MenuItem value="Out of stock">Out of stock</MenuItem>
      </Select>
      {inventory.status === 'In stock' && (
        <TextField
          label="Units"
          name="units"
          fullWidth
          variant="filled"
          size="small"
          color={color}
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          value={inventory.units}
          onChange={handleUnitsChange}
        />
      )}
    </>
  );
};

export default InventoryField;
