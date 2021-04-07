import styled from "styled-components";

import theme from "../../themes/theme";

type TextType = "title" | "subtitle" | "button" | "text";
type TextWeigth = "normal" | "bold" | "bolder";
type TextAlign = "center" | "justify" | "end" | "left" | "right";

export interface PProps {
  type?: TextType;
  weight?: TextWeigth;
  color?: string;
  align?: TextAlign;
}

function getSize(type: TextType) {
  const key = type + "Size";

  return theme.typography[key];
}

export const P = styled.p<PProps>`
  font-size: ${({ type }) => getSize(type ?? "text")};
  color: ${({ color }) => color ?? "inherit"};
  font-weight: ${({ weight }) => weight ?? "inherit"};
  text-align: ${({ align }) => align ?? "inherit"};
`;
