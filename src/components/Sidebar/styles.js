import styled from 'styled-components';

export const StyledSidebar = styled.aside`
  flex-basis: 300px;
  flex-grow: 1;
`;

export const StyledLogoContainer = styled.div`
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.01);
`;

export const StyledContent = styled.div`
  flex: 1;
  padding: 1em;
  overflow: auto;
  max-height: calc(100vh - 60px);
`;
