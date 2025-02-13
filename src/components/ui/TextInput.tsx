import React from 'react';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { COLOR_GREY, SPACING, SPACING_COMPONENT } from './../../styles/theme';

interface props {
  disabled?: boolean;
  error?: boolean;
  errorText?: string;
  isInline?: boolean;
  isPassword?: boolean;
  label: string;
  onCallback: (t:string) => any;
  onBlurCallback?: (t:any) => any;
  name: string;
  placeholder?: string;
  required?: boolean;
  tooltip?: string;
  value: string;
}

export const TextInput: React.FC<props> = ({ disabled, error, errorText, isInline, isPassword, label, name, onBlurCallback, onCallback, placeholder, required, tooltip, value }) => 
   {
    const t = <>
      <p style={{
        color: COLOR_GREY,
      }}>{label}</p>
      <TextField
        error={error}
        name={name}
        helperText={error && errorText}
        id={name}
        onChange={(e) => {
          const v = e.target.value

          onCallback(v); // pass back to parent component
        }}
        inputProps={{
          onBlur: (e) => {
            if (!!onBlurCallback) {
              onBlurCallback(e.target.value);
            }
          },
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
          }
        }}
        type={isPassword ? 'password' : 'text'}
        value={value}
        variant="outlined"
      />
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
