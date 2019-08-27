import React from 'react';

export interface ICardProps {
  /** children card elements to be displayed */
  children: React.ReactNode,
}

export interface ICardTitleProps {
  /** children card title elements to be displayed */
  children: React.ReactNode,
  /** if the title is a string, whether it should be strong(bold) */
  strong?: boolean,
}

export interface ICardContentProps {
  /** children card content elements to be displayed */
  children: React.ReactNode,
}

export interface ICardActionsProps {
  /** children card actions elements to be displayed */
  children: React.ReactNode,
}
