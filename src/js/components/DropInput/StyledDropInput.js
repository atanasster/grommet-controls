import styled from 'styled-components';
import { Box } from 'grommet/es6/components/Box';
import { TextInput } from 'grommet/es6/components/TextInput';
import { parseMetricToNum } from 'grommet/es6/utils/mixins';

export const StyledDropInput = styled(TextInput)`
  padding-right: ${(props) => {
    const widgetsBox = props.numWidgets *
      (24 + (2 * parseMetricToNum(props.theme.global.edgeSize.small)));

    // eslint-disable-next-line no-mixed-operators
    return widgetsBox + (parseMetricToNum(props.theme.global.spacing) / 2) -
    parseMetricToNum(props.theme.global.control.border.width);
  }}px;
`;


export const StyledDropInputContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const StyledWidgetsContainer = styled(Box)`
  position: absolute;
  right: 0;
  top: ${props => (`${parseMetricToNum(props.theme.global.edgeSize.small) / 2}px`)};
  bottom: 0;
`;

