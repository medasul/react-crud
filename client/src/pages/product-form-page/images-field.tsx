import React from 'react';
import { projectColors } from 'assets/variables';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  Stack,
  Typography,
  TextField,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';

const ImagesField = () => (

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
      <AddCircleIcon sx={{ fontSize: 35, color: projectColors.primary }} />
    </IconButton>
  </Box>

);

export default ImagesField;
