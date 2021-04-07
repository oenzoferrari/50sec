import { ButtonHTMLAttributes } from "react";
import { Dots } from "react-activity";
import { useTheme } from "styled-components";

import Text from "../Text";

import { B } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
}

function Button({ text, loading, onClick }: ButtonProps) {
  const { colors } = useTheme();

  console.log(loading);

  return (
    <B onClick={onClick} disabled={loading}>
      {loading ? (
        <Dots size={10} color={colors.onPrimary} />
      ) : (
        <Text type="button" color={colors.onPrimary}>
          {text}
        </Text>
      )}
    </B>
  );
}

export default Button;

// Levels
// Sentry
// Spinner
// Squares
// Digital
// Bounce
// Windmill
