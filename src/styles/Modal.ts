import styled from 'styled-components';

const Modal = styled.div<{ show: boolean }>`
  position: fixed;
  display: ${(props) => (props.show ? 'block' : 'none')};
  top: 0;
  left: 0;
  z-index: 1;
  overflow: auto;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export default Modal;
