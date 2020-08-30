import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import { Box, Button, ButtonProps } from 'grommet';
import { ColorType } from 'grommet/utils';
import { normalizeColor } from 'grommet/utils/colors';

export const StyledTableComponent = styled(Box)`
  align-items: stretch;
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
`;

export const StyledTableBodyComponent = styled(Box)``;

export const StyledTHeadComponent = styled(Box)`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const StyledResizerComponent = styled(Box)`
  display: inline-block;
  position: absolute;
  width: 36px;
  top: 0;
  bottom: 0;
  right: -18px;
  cursor: col-resize;
  z-index: 10;
`;

export interface ThComponentProps {
  sort?: string | boolean;
  resizable: boolean;
  sortable: boolean;
  hidden: boolean;
  expander?: ButtonProps;
  pivot: string | boolean;
  toggleSort?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  CellTextComponent?: React.ElementType;
  style: object;
}

export const StyledThComponent = styled(Box)<ThComponentProps>`
  position: relative;
  ${props =>
    props.sortable &&
    `
    cursor: pointer;
  `}    
  ${props =>
    props.hidden &&
    `
    width: 0 !important;
    min-width: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    opacity: 0 !important;
  `}
  ${props =>
    props.pivot &&
    `
    &:after,:before {
      left: 100%;
      top: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none
    }
  
    &:after {
      border-color: rgba(255, 255, 255, 0);
      border-left-color: #fff;
      border-width: 8px;
      margin-top: -8px
    }
  
    &:before {
      border-color: rgba(102, 102, 102, 0);
      border-left-color: #f7f7f7;
      border-width: 10px;
      margin-top: -10px
    }

  `}  
  ${props =>
    props.resizable &&
    `
    overflow: visible;

    &:last-child {
      overflow: hidden
    }
  `}  
`;

export const StyledTrGroupComponent = styled(Box)`
  align-items: stretch;
`;

export interface ITrComponentProps {
  hover?: {
    background: ColorType;
    color: ColorType;
  };
}
export const StyledTrComponent = styled(Box)<ITrComponentProps>`
  ${props =>
    props.hover &&
    `
    &:hover {
      background-color: ${normalizeColor(
        props.hover.background || props.theme.global.hover.background,
        props.theme,
      )};
      color: ${normalizeColor(
        props.hover.color || props.theme.global.hover.color,
        props.theme,
      )};
    }  
  `}
`;

export const StyledTdComponent = styled(Box)`
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: nowrap;
  ${props =>
    props.hidden &&
    `
    width: 0 !important;
    min-width: 0 !important;
    padding: 0 !important;
    border: 0 !important;
    opacity: 0 !important
  `}
`;

export const StyledExpander = styled(Button)`
  position: relative;
  margin: 0;
  padding: 0;
  left: -5px;
  color: transparent;
  cursor: pointer;
`;

export const StyledTfootComponent = styled(Box)``;
