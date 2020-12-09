import React from 'react';
import { TabsContainer, EachTab, StyledLink } from '../styles/Tabs';

const TabsTitle = () => {
  return (
    <TabsContainer>
      <EachTab>
        <StyledLink to="/todo">TODO</StyledLink>
      </EachTab>
      <EachTab>
        <StyledLink to="/inProgress">IN RPOGRESS</StyledLink>
      </EachTab>
      <EachTab>
        <StyledLink to="/done">DONE</StyledLink>
      </EachTab>
    </TabsContainer>
  );
};

export default TabsTitle;
