import React from 'react';
import {
  Stack,
  Typography,
  TextField,
  Paper,
  Box,
  InputAdornment,
  IconButton,
  Button,
  Container
} from '@mui/material';
import HiveIcon from '@mui/icons-material/Hive';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { projectColors } from 'assets/variables';

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
      sx={{ p: 3,  backgroundColor: projectColors.secondary, width: (theme) => ({ xs: 1, sm: theme.breakpoints.values.sm }) }}
    >
      <Stack sx={{ gap: 2, alignItems: 'center' }}>
        <HiveIcon sx={{ fontSize: 60, color: projectColors.primary }} />
        <Typography variant="h4" sx={{ color: projectColors.primary }}>Create new product</Typography>
        <TextField
          label="Title"
          fullWidth
          variant="filled"
          size="small"
        />
        <TextField
          label="Price"
          type="number"
          inputProps={{ step: '0.01' }}
          fullWidth
          variant="filled"
          size="small"
        />
         <TextField
          label="Inventory"
          fullWidth
          variant="filled"
          size="small"
        />
        <Box sx={{ width: 1 }}>
          <Typography component="legend">Images</Typography>
          <Stack sx={{ gap: 2 }}>
            <TextField
              label="Image"
              fullWidth
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Image"
              fullWidth
              variant="filled"
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <DeleteIcon color="error" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <IconButton>
            <AddCircleIcon sx={{ fontSize: 35,color: projectColors.primary }} />
          </IconButton>
        </Box>

        <Button variant="contained" 
        sx={{ backgroundColor: projectColors.primary,
              '&:hover': {
            backgroundColor: projectColors.primary,
            color: projectColors.hoverAndActive,
  
          }, }} 
        size="large" fullWidth>Create</Button>
      </Stack>
    </Paper>
</Stack>
);

export default ProductFormPage;