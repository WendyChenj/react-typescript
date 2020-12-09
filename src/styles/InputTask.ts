import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const InputFormContainer = styled.form`
  position: absolute;
  width: 40%;
  height: 200px;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -100px;
  border: 1px solid #808080;
  padding: 32px 32px;
  background-color: white;
  font-size: 1.25rem;
`;

export const InputTask = styled.input`
  border: 1px solid #808080;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 400;
  width: 80%;
  margin: 32px 0;
`;

export const InputButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #0257d6;
  padding: 8px 16px;
  font-size: 1rem;
  color: white;
  &:hover {
    cursor: pointer;
    background-color: #011f4b;
  }
`;

export const InputCancelButton = styled(InputButton)`
  margin-left: 32px;
  background-color: #ec524b;
  &:hover {
    background-color: #ba423c;
  }
`;
