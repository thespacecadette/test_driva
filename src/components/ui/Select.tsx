import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import { COLOR_GREY, SPACING, SPACING_COMPONENT } from './../../styles/theme';

interface props {
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  isInline?: boolean;
  isPassword?: boolean;
  label: string;
  name: string;
  onCallback: (t:string) => any;
  placeholder?: string;
  required?: boolean;
  tooltip?: string;
  value: string;
  options: Array<any>;
}

export const Select: React.FC<props> = ({ disabled, error, errorText, isInline, options, label, name, onCallback, placeholder, required, tooltip, value }) => 
   {
    const t = <>
      <p style={{
        color: COLOR_GREY,
      }}>{label}</p>
      <TextField
        select
        error={error}
        helperText={error && errorText}
        id={name}
        name={name}
        onChange={(e) => {
          const v = e.target.value
          onCallback(v); // pass back to parent component
        }}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        style={{
          marginBottom: `${SPACING_COMPONENT}px`,
          paddingBottom: `${SPACING_COMPONENT}px`,
          display: isInline ? 'inline-flex' : 'block',
          width: isInline ? 'auto' : '100%',
        }}
        sx={{
          MuiFormControl: {
            width: '100%'
          },
        }}
        value={value}
        variant="outlined"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </>;

    if(tooltip || tooltip !== '') {
      return <Tooltip 
                title={tooltip} 
                arrow={true}
                slotProps={{
                  popper: {
                    modifiers: [
                      {
                        name: 'offset',
                        options: {
                          offset: [0, -(SPACING * 6)],
                        },
                      },
                    ],
                  },
                }}
        >{t}
      </Tooltip>
    }

    return t
  }
