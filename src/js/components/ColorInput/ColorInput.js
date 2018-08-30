import React, { Component } from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import { Box } from 'grommet';
import { StopFill } from 'grommet-icons';
import { withTheme } from '../hocs';
import { MaskedInput } from '../MaskedInput';
import { Colors } from '../Colors';


const StyledColorButton = styled.span`
  display:  inline-flex;
  svg {
    border: ${props => `${props.theme.button.border.width} solid ${props.theme.global.colors.border}`};
    fill: ${props => props.selectedColor};
    stroke: ${props => props.selectedColor};
    transition: none;
  }
`;

class ColorInput extends Component {
  static defaultProps = {
    size: 'small',
    mask: ['#', /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/, /[0-9a-fA-F]/],
  }
  constructor(props) {
    super(props);
    this.state = { selectedColor: props.value || props.defaultValue };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (value !== this.props.value) {
      this.setState({ selectedColor: value });
    }
  }
  onChange = (e) => {
    const { onChange } = this.props;
    this.setState({ selectedColor: e.target.value });
    if (onChange) {
      onChange(e);
    }
  }
  onSelect = ({ color }) => {
    this.setState({ selectedColor: color });
    this.upDateValue(color);
  }
  render() {
    const {
      columns, wrap, theme, colors, size, ...rest
    } = this.props;
    const { selectedColor } = this.state;
    return (
      <MaskedInput
        update={(update) => { this.upDateValue = update; }}
        dropIcon={(
          <StyledColorButton theme={theme} selectedColor={selectedColor}>
            <StopFill />
          </StyledColorButton>
        )}
        dropContent={(
          <Box pad='small'>
            <Colors
              color={selectedColor}
              colors={colors}
              onSelect={this.onSelect}
              columns={columns}
              wrap={wrap}
              size={size}
            />
          </Box>
        )}
        onChange={this.onChange}
        {...rest}
      />
    );
  }
}

let ColorInputDoc;
if (process.env.NODE_ENV !== 'production') {
  ColorInputDoc = require('./doc').doc(ColorInput); // eslint-disable-line global-require
}

const ColorInputWrapper = compose(
  withTheme,
)(
  ColorInputDoc || ColorInput
);

export { ColorInputWrapper as ColorInput };
