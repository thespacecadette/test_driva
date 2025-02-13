import React from 'react';
import MUIButton, { ButtonProps as baseProps } from '@mui/material/Button';
import { SPACING_COMPONENT } from '../../styles/theme';

type ButtonProps = baseProps & {
  /**
   * Optional click handler
   */
  onCallback?: () => void;
  /**
   * Stretch width to 100%
   */
  wide?: boolean;
  /**
   * Label
   */
  text: string;
  /**
   * Type
   */
   type: string;
  /**
   * MUI Color - palette
   */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info';
  /**
   * MUI Variant
   */
  variant?: 'outlined' | 'contained' | 'text';
  /**
   * Disable the button
   */
  disabled?: boolean;
  style?: any;
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps) => {
  const { color, disabled, endIcon, onCallback, startIcon, style,wide, variant, text, type } = props;

  return (
    <MUIButton 
      color={color ? color : 'primary'}
      disabled={disabled}
      endIcon={endIcon}
      onClick={() => {
        if (onCallback) {
          onCallback(); // pass back to parent component
        }
      }}
      startIcon={startIcon}
      style={{
        width: wide ? '100%' : 'auto',
        margin: `0 0 ${SPACING_COMPONENT}px 0`,
        ...style,
      }}
      type={type}
      variant={variant ? variant : 'contained'} 
    >
      {text}
    </MUIButton>
  );
};
