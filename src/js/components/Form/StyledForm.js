import styled from 'styled-components';

const StyledForm = styled.form`

`;

export default StyledForm.extend`
  ${props => props.theme.form && props.theme.form.extend}
`;
