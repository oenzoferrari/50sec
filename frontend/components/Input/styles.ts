import styled from "styled-components";

export interface IProps {
  error?: boolean;
}

export const I = styled.input<IProps>`
  width: 100%;
  height: 25px;

  display: ${({ hidden }) => (hidden ? "none" : "flex")};
  justify-content: flex-start;
  align-items: center;

  padding: 10px;

  background-color: #fff;

  border: 1px solid ${({ error }) => (error ? "red" : "#d9d9d9")};
  color: ${({ error, theme }) => (error ? "red" : theme.colors.onBackground)};

  border-radius: 2px;

  &:focus {
    outline: none;
  }
`;
