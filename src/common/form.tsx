'use client';

import {
  type SxProps,
  type Theme,
  FormControl,
  FormHelperText,
  FormLabel,
  OutlinedInput,
} from '@mui/material';
import { type FC } from 'react';
import { type FieldError } from 'react-hook-form';



export type Size = `small` | `medium`;


interface InputProps {
  id: string;
  label: string | JSX.Element;
  name: string;
  value?: string | number | Date;
  onChange: (...event: any[]) => void;
  type: string;
  size: Size;
  placeholder?: string;
  error?: FieldError;
  disabled?: boolean;
  readOnly?: boolean;
  fullWidth?: boolean;
  startAdornment?: JSX.Element;
  endAdornment?: JSX.Element;
  multiline?: boolean;
  rows?: number;
  sx?: SxProps<Theme>;
}

const FormInput: FC<InputProps> = ({
  id,
  label,
  name,
  value,
  onChange,
  type,
  size,
  placeholder = ``,
  error = undefined,
  disabled = false,
  readOnly = false,
  fullWidth = false,
  startAdornment = undefined,
  endAdornment = undefined,
  multiline = false,
  rows = 1,
  sx = { backgroundColor:`#F3F3F3` },
}) => (
  <FormControl
    fullWidth={fullWidth}
    error={Boolean(error?.message)}
    disabled={disabled}
  >
    <FormLabel
      htmlFor={id}
      sx={{
        fontWeight: 400,
        fontSize: `20px`,
        lineHeight: `26px`,
        color: `#1E1B1B`,
      }}
    >
      {label}
    </FormLabel>
    <OutlinedInput
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      size={size}
      placeholder={placeholder}
      readOnly={readOnly}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      multiline={multiline}
      rows={rows}
      aria-describedby={`${name}-error`}
      sx={sx}
    />
    <FormHelperText id={`${name}-error`} data-testid={`${name}-error`}>
      {error?.message}
    </FormHelperText>
  </FormControl>
);

export default FormInput;
