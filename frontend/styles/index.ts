import styled from "styled-components";
import theme from "../themes/theme";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-image: url(/art.svg);
  background-size: 85%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.titleSize};
  color: ${({ theme }) => theme.colors.primary};
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.subtitleSize};
  color: ${({ theme }) => theme.colors.subtitle};
  text-align: center;
  max-width: 350px;
`;

export const FormChooseContainer = styled.div`
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

export const ActionOption = styled.p<ActionOptionProps>`
  color: ${({ selected }) =>
    selected ? theme.colors.primary : theme.colors.onBackground};

  font-size: ${({ theme }) => theme.typography.textSize};

  font-weight: ${({ selected }) => (selected ? "bold" : undefined)};

  border-bottom: ${({ selected }) =>
    selected ? `1px solid ${theme.colors.primary}` : undefined};

  cursor: pointer;
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

export const Input = styled.input`
  width: 100%;
  height: 25px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 10px;

  background-color: #fff;

  border: 1px solid #d9d9d9;
  border-radius: 2px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  all: unset;

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

  :hover {
    opacity: 0.8;
  }
`;
