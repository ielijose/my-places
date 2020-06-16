import React from 'react';
import Logo from '../Logo';
import PlacesList from '../PlacesList';
import { StyledContent, StyledLogoContainer, StyledSidebar } from './styles';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledLogoContainer>
        <Logo></Logo>
      </StyledLogoContainer>
      <StyledContent>
        <PlacesList></PlacesList>
      </StyledContent>
    </StyledSidebar>
  );
};

export default Sidebar;
