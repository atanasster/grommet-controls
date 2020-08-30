/* eslint-disable @typescript-eslint/interface-name-prefix */
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { ThemeContext } from 'styled-components';
import { Box, Keyboard } from 'grommet';
import { normalizeColor } from 'grommet/utils/colors';
import { parseMetricToNum } from 'grommet/utils/mixins';
import {
  StyledColors,
  StyledColor,
  StyledColorContainer,
  StyledRow,
  StyledRows,
} from './StyledColors';
import { IColorsProps } from './ColorsProps';

interface IColor {
  color: string;
  name?: string;
  buttonRef: React.RefObject<HTMLButtonElement>;
}
interface IColors {
  colors: IColor[];
  name?: string;
}

const buildState = (props: IColorsProps): IColorsState => {
  const { colors, color, columns, wrap } = props;
  let colorRows = [];
  let lastRow = null;
  if (colors) {
    Object.keys(colors).forEach(item => {
      if (typeof colors[item] === 'object') {
        const row = { name: item, colors: [], buttonRef: React.createRef() };
        Object.keys(colors[item]).forEach(colorName => {
          const colorsColor = colors[item][colorName];
          row.colors.push({ name: colorName, color: colorsColor });
        });
        colorRows.push(row);
      } else {
        if (!lastRow) {
          lastRow = { name: undefined, colors: [] };
          colorRows.push(lastRow);
        }
        lastRow.colors.push({
          name: item,
          color: colors[item],
          buttonRef: React.createRef(),
        });
      }
    });
  }
  const colorsPerRow =
    columns ||
    (colorRows.length === 1
      ? Math.sqrt(colorRows[0].colors.length)
      : colorRows.reduce(
          (res, row) => Math.min(res, row.colors.length),
          Number.MAX_SAFE_INTEGER,
        ));
  let wrapColors = wrap;
  if (wrapColors === undefined) {
    wrapColors = columns === undefined && colorRows.length === 1;
  }
  if (wrapColors) {
    const finalRows = [];
    colorRows.forEach(row => {
      while (row.colors.length > 0) {
        finalRows.push({
          name: row.name,
          colors: row.colors.splice(0, colorsPerRow),
        });
      }
    });
    colorRows = finalRows;
  } else {
    colorRows = colorRows.map(row => ({
      ...row,
      colors: row.colors.filter((_, index) => index < colorsPerRow),
    }));
  }
  let activeRow = 0;
  let activeColor = 0;
  colorRows.find((row, rowIndex) =>
    row.colors.find((item, colorIndex) => {
      const found = item.color === color;
      if (found) {
        activeRow = rowIndex;
        activeColor = colorIndex;
      }
      return found;
    }),
  );
  return { colorRows, activeRow, activeColor };
};

interface IColorsState {
  colors?: IColors[];
  colorRows: IColors[];
  activeRow: number;
  activeColor: number;
}

/** A color selection element, with custom color palettes.<br/>
 *`import { Colors } from 'grommet-controls';`<br/>
 *`<Colors colors={...} />`<br/>
 */
class Colors extends Component<IColorsProps, IColorsState> {
  static defaultProps = {
    size: 'medium',
  };

  setFocus = false;

  timer = 0;

  constructor(props) {
    super(props);
    this.state = buildState(props);
  }

  static getDerivedStateFromProps(nextProps) {
    return buildState(nextProps);
  }

  componentDidUpdate() {
    if (this.setFocus) {
      const { activeRow, activeColor, colorRows } = this.state;

      this.setFocus = false;
      if (
        colorRows[activeRow] &&
        colorRows[activeRow].colors[activeColor] &&
        colorRows[activeRow].colors[activeColor].buttonRef
      ) {
        // eslint-disable-next-line react/no-find-dom-node
        const buttonNode = findDOMNode(
          colorRows[activeRow].colors[activeColor].buttonRef.current,
        ) as HTMLButtonElement;
        if (buttonNode) {
          buttonNode.scrollIntoView();
          buttonNode.focus();
        }
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  setActive = ({ rowIndex, colorIndex }) => {
    const { colorRows } = this.state;
    this.setFocus = true;
    const activeRow = Math.min(Math.max(0, rowIndex), colorRows.length - 1);
    const color = Math.max(0, colorIndex);
    const activeColor = Math.min(color, colorRows[activeRow].colors.length - 1);
    this.setState({
      activeRow,
      activeColor,
    });
  };

  onClickColor = ({
    color,
    rowIndex,
    colorIndex,
    rowName,
    colorName,
  }) => () => {
    const { onSelect } = this.props;
    this.setActive({ rowIndex, colorIndex });
    if (onSelect) {
      onSelect({ color, rowName, colorName });
    }
  };

  render() {
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      wrap,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSelect,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      columns,
      size,
      ...rest
    } = this.props;
    const { colorRows, activeRow, activeColor } = this.state;
    const colors = (theme, cellSize) =>
      colorRows.map((row, rowIndex) => (
        <StyledRow
          key={`row_${rowIndex}`}
          theme={theme}
          style={{
            width: `${cellSize * row.colors.length}px`,
            height: `${cellSize}px`,
          }}
        >
          {row.colors.map((color, colorIndex) => {
            const isActive =
              activeRow === rowIndex && activeColor === colorIndex;
            const colorStyle = {
              backgroundColor: color.color,
              color: normalizeColor('text', theme),
              left: `${cellSize * colorIndex}px`,
            };
            return (
              <StyledColorContainer key={`color_${colorIndex}`} theme={theme}>
                <StyledColor
                  // eslint-disable-next-line no-param-reassign
                  ref={color.buttonRef as any}
                  style={colorStyle}
                  size={size}
                  theme={theme}
                  tabIndex={isActive ? 0 : -1}
                  a11yTitle={`${row.name !== undefined ? row.name : ''} ${
                    color.name
                  }`}
                  plain={true}
                  active={isActive}
                  hoverIndicator="background"
                  onClick={this.onClickColor({
                    color: color.color,
                    rowIndex,
                    colorIndex,
                    colorName: color.name,
                    rowName: row.name,
                  })}
                >
                  <span>{color.color}</span>
                </StyledColor>
              </StyledColorContainer>
            );
          })}
        </StyledRow>
      ));
    return (
      <ThemeContext.Consumer>
        {theme => {
          const cellSize = parseMetricToNum(theme.calendar[size].daySize);
          return (
            <StyledColors size={size} theme={theme} {...rest}>
              <Keyboard
                onUp={event => {
                  event.preventDefault();
                  this.setActive({
                    rowIndex: activeRow - 1,
                    colorIndex: activeColor,
                  });
                }}
                onDown={event => {
                  event.preventDefault();
                  this.setActive({
                    rowIndex: activeRow + 1,
                    colorIndex: activeColor,
                  });
                }}
                onLeft={() =>
                  this.setActive({
                    rowIndex: activeRow,
                    colorIndex: activeColor - 1,
                  })
                }
                onRight={() =>
                  this.setActive({
                    rowIndex: activeRow,
                    colorIndex: activeColor + 1,
                  })
                }
              >
                <Box>
                  <StyledRows
                    style={{ height: `${cellSize * colorRows.length}px` }}
                  >
                    {colors(theme, cellSize)}
                  </StyledRows>
                </Box>
              </Keyboard>
            </StyledColors>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export { Colors };
