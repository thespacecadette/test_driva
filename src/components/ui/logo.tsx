import React from 'react';
import { TOP_NAV_HEIGHT, SPACING_BLOCK, SPACING_COMPONENT } from "../../styles/theme";

interface props {
  title: string;
  width?: number;
};

export const Logo: React.FC<props> = ({ width=120, title }) => 
  <div style={{
    height: `${width}px`,
    lineHeight: `${width}px`,
    marginLeft: `${SPACING_BLOCK}px`,
    marginTop: `${((TOP_NAV_HEIGHT - SPACING_COMPONENT) / 2) - 2}px`,
  }}>
    <a href="/" title={title}>
    Driva
    </a>
  </div>
