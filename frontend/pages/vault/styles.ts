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

export const InputContainer = styled.div`
  width: 200px;

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;

  & > :not(:first-child) {
    margin-top: 10px;
  }
`;
