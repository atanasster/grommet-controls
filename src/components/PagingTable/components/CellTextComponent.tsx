import React from 'react';
import { Text, TextProps } from 'grommet';

interface IExtractTextProps {
  value?: any;
  color?: any;
  size?: any;
  truncate?: any;
  weight?: any;
  textAlign?: any;
  [x: string]: any;
}
export const extractTextProps = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  value,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  color,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  truncate,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  weight,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  textAlign,
  ...rest
}: IExtractTextProps) => rest;

export const collectTextProps = ({
  color,
  size,
  truncate,
  weight,
  textAlign,
}: TextProps): TextProps => ({
  color,
  size,
  truncate,
  weight,
  textAlign,
});

const CellTextComponent = ({ value, ...rest }) => (
  <Text {...collectTextProps(rest)}>{value}</Text>
);

export default CellTextComponent;
