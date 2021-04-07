import { InputHTMLAttributes, ReactNode } from "react";

import { I, IProps } from "./styles";

interface InputProps extends IProps, InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
  onChangeText: (value: string) => any;
}

function Input(props: InputProps) {
  function _onChange({ target }) {
    const { value } = target;

    props.onChangeText(value);
  }

  return (
    <I onChange={_onChange} {...props}>
      {props.children}
    </I>
  );
}

export default Input;
