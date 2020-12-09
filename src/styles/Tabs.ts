import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TabsContainer = styled.div`
  width: 100%;
  height: 56px;
  background-color: #011f4b;
  color: white;
  display: flex;
  flex-flow: row nowrap;
`;

export const EachTab = styled.div`
  flex-grow: 1;
  text-align: center;
  margin: 0 16px;
`;

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  display: inline-block;
  width: 100%;
  padding: 16px 0 8px;
  font-size: 1.125rem;
  color: white;
  text-decoration: none;
  &.${activeClassName} {
    border-bottom: 10px solid #f8b24f;
  }
`;
