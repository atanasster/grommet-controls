import React from 'react';

export interface IHeaderProps {
  /** Position property for the header element */
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
  /** z-index for the header */
  zIndex?: number;
  /** children content elements to be displayed in the header */
  children: React.ReactNode;
}
