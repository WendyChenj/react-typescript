import styled from 'styled-components';

export const ItemsContainer = styled.div`
  margin-top: 32px;
`;

export const ItemsListContainer = styled.ul`
  font-size: 1.5rem;
  list-style: circle;
  padding-inline-start: 16px;
`;

export const ItemList = styled.li`
  padding: 16px 10px;
  border-bottom: 1px solid #d3d3d3;
`;

export const TodoItemContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
