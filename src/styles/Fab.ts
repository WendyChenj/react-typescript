import styled from 'styled-components';
import { AddCircle } from '@styled-icons/ionicons-solid/AddCircle';

export const Fab = styled(AddCircle)`
  color: #011f4b;
  &:hover {
    cursor: pointer;
    color: #0257d6;
  }
`;

export const FabButton = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;
  border: none;
  background-color: white;
`;
