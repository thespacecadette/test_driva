import React from 'react';
import { NavLink } from 'react-router-dom';
import { COLOR_PRIMARY, FONT, FONT_SIZE_BODY, SPACING_COMPONENT } from './../../styles/theme';

interface props {
  name: string;
  to: string;
}

export const Link: React.FC<props> = ({ name, to }) => 
<NavLink 
to={to} 
style={{
  color: COLOR_PRIMARY,
  fontFamily: FONT,
  fontSize: FONT_SIZE_BODY,
  marginBottom: `${SPACING_COMPONENT}px`,
  textDecoration: 'none'
}}>{name}</NavLink>
