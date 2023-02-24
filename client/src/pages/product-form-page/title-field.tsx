import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

type TitleFieldProps = {
  color: TextFieldProps['color'],
  defaultTitle?: string,
};

const TitleField: React.FC<TitleFieldProps> = ({
  color,
  defaultTitle,
}) => (
  <TextField
    label="Title"
    name="title"
    fullWidth
    variant="filled"
    size="small"
    color={color}
    defaultValue={defaultTitle}
  />
);

export default TitleField;
