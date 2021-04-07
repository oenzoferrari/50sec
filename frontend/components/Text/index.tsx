import { HTMLAttributes, ReactNode } from "react";

import { P, PProps } from "./styles";

interface TextProps extends PProps, HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

function Text(props: TextProps) {
  return <P {...props}>{props.children}</P>;
}

export default Text;
