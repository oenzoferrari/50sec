import styled from "styled-components";

export const B = styled.button`
  all: unset;

  :disabled {
    opacity: 0.5;
  }

  width: 100%;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;

  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};

  font-weight: bold;

  border-radius: 2px;

  text-transform: uppercase;

  cursor: pointer;

  transition: 0.5s;

  :hover :not(:disabled) {
    opacity: 0.8;
    transition: 0.5s;
  }
`;
