import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
`;

export default StyledForm.extend`
  ${props => props.theme.form && props.theme.form.extend}
`;
