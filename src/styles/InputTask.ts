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
  display: flex;
  flex-flow: column nowrap;
`;

export const InputTask = styled.input`
  border: 1px solid #808080;
  padding: 10px 16px;
  font-size: 1rem;
  font-weight: 400;
  width: 80%;
  margin: 32px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const InputButton = styled.button<{ disabled: boolean }>`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? '#808080' : '#0257d6')};
  padding: 8px 16px;
  font-size: 1rem;
  color: white;
  &:hover {
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: ${(props) => (props.disabled ? '#808080' : '#011f4b')};
  }
`;

export const InputCancelButton = styled(InputButton)`
  margin-left: 32px;
  background-color: #ec524b;
  &:hover {
    background-color: #ba423c;
  }
`;

export const Select = styled.select`
  padding: 10px 16px;
  width: 30%;
  margin: -16px 0 16px;
  font-size: 1rem;

  option {
    color: black;
    background-color: white;
  }
`;
