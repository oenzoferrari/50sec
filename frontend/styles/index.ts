import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-image: url(/art.svg);
  background-size: 95%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FormSelection = styled.div`
  margin-top: 20px;
  width: 350px;

  padding: 10px;

  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.subtitle};

  & > :not(:first-child) {
    margin-left: 15px;
  }
`;

interface ActionOptionProps {
  selected?: boolean;
}

export const ActionOption = styled.div<ActionOptionProps>`
  color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.onBackground};

  font-weight: ${({ selected }) => (selected ? "bold" : undefined)};

  border-bottom: ${({ selected, theme }) =>
    selected ? `2px solid ${theme.colors.primary}` : undefined};

  padding: 5px;

  cursor: pointer;

  :hover {
    opacity: 0.8;
    transition: 0.5s;
  }
`;

export const InputContainer = styled.div`
  width: 350px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;

  & > :not(:first-child) {
    margin-top: 10px;
  }
`;
