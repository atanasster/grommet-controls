import styled, { css } from 'styled-components';
import { Button } from 'grommet';

interface IColoSizeProps {
  size: 'small' | 'medium' | 'large',
  theme: {
    calendar: {
      [x: string]: {
        fontSize: string,
        lineHeight: string,
        daySize: string,
      },
    }
  },
}
const sizeStyle = (props: IColoSizeProps) => {
  const data = props.theme.calendar[props.size];
  return css`
    font-size: ${data.fontSize};
    line-height: ${data.lineHeight};
  `;
};

export const StyledColors = styled.div<IColoSizeProps>`
  ${props => sizeStyle(props)}
`;


export const StyledRows = styled.div`
  position: relative;
`;

export const StyledRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-justify: between;
`;

export const StyledColorContainer = styled.div`
  flex: 0 0;
`;

const colorSizeStyle = (props: IColoSizeProps) => {
  const data = props.theme.calendar[props.size];
  return css`
    width: ${data.daySize};
    height: ${data.daySize};
  `;
};

export const StyledColor = styled(Button)<IColoSizeProps>`
  top: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => colorSizeStyle(props)}
  span {
    visibility: hidden;
  };  
  transition: transform .2s;
  &:hover {
    z-index: 10;
    width: auto;
    -webkit-transform:scale(2);
    -moz-transform:scale(2);
    transform:scale(2);
    span {
      visibility: visible;
    };
  );
`;
