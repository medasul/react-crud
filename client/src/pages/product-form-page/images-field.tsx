import React from 'react';
import { projectColors } from 'assets/variables';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import createId from 'uniqid';
import {
  Stack,
  Typography,
  TextField,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';

const initialIds = [createId()];

const ImagesField = () => {
  const [imgFieldsIds, setImgFieldsIds] = React.useState<string[]>(initialIds);

  const addImgField = () => setImgFieldsIds([...imgFieldsIds, createId()]);
  const removeImgField = (id: string) => {
    if (imgFieldsIds.length > 1) {
      setImgFieldsIds(imgFieldsIds.filter((imgId) => imgId !== id));
    }
  };

  return (

    <Box sx={{ width: 1 }}>
      <Typography component="legend">Images</Typography>
      <Stack sx={{ gap: 2 }}>
        {imgFieldsIds.map((id) => (
          <TextField
            key={id}
            label="Image"
            name="images"
            fullWidth
            variant="filled"
            size="small"
            InputProps={imgFieldsIds.length > 1 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => removeImgField(id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </InputAdornment>
              ),
            } : undefined}
          />
        ))}
      </Stack>
      <IconButton onClick={addImgField}>
        <AddCircleIcon sx={{ fontSize: 35, color: projectColors.primary }} />
      </IconButton>
    </Box>

  );
};

export default ImagesField;
