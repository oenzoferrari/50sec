import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
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
