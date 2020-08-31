import React, { Component } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { StopFill } from 'grommet-icons';
import { MaskedInput } from '../MaskedInput';
import { Colors } from '../Colors';
import { IColorInputProps } from './ColorInputProps';
import { IColorsProps } from '../Colors/ColorsProps';
import { IMaskedInputProps } from '../MaskedInput/MaskedInputProps';

interface StyledColorButtonProps {
  selectedColor: string;
}
const StyledColorButton = styled.span<StyledColorButtonProps>`
  display: inline-flex;
  svg {
    border: ${props =>
      `${props.theme.button.border.width} solid ${props.theme.global.colors.border}`};
    fill: ${props => props.selectedColor};
    stroke: ${props => props.selectedColor};
    transition: none;
  }
`;

interface IColorInputState {
  selectedColor: string;
}
/**
 * A masked color entry field, with a drop button to select a color.
 * All properties of MaskedInput apply.
 */
class ColorInput extends Component<
  IColorInputProps & IMaskedInputProps & IColorsProps,
  IColorInputState
> {
  static defaultProps = {
    size: 'small',
    mask: [
      '#',
      /[0-9a-fA-F]/,
      /[0-9a-fA-F]/,
      /[0-9a-fA-F]/,
      /[0-9a-fA-F]/,
      /[0-9a-fA-F]/,
      /[0-9a-fA-F]/,
    ],
  };

  upDateValue = null;

  constructor(props: IColorInputProps & IMaskedInputProps & IColorsProps) {
    super(props);
    this.state = {
      selectedColor: (props.value || props.defaultValue) as string,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      selectedColor: nextProps.value,
    };
  }

  onChange = e => {
    const { onChange } = this.props;
    this.setState({ selectedColor: e.target.value });
    if (onChange) {
      onChange(e);
    }
  };

  onSelect = ({ color }) => {
    this.setState({ selectedColor: color });
    this.upDateValue(color);
  };

  render() {
    const { columns, wrap, colors, size, ...rest } = this.props;
    const { selectedColor } = this.state;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <MaskedInput
            update={update => {
              this.upDateValue = update;
            }}
            dropIcon={
              <StyledColorButton theme={theme} selectedColor={selectedColor}>
                <StopFill />
              </StyledColorButton>
            }
            dropContent={
              <Colors
                color={selectedColor}
                colors={colors}
                onSelect={this.onSelect}
                columns={columns}
                wrap={wrap}
                size={size}
              />
            }
            onChange={this.onChange}
            {...rest}
          />
        )}
      </ThemeContext.Consumer>
    );
  }
}

export { ColorInput };
