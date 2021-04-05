import "styled-components";

interface Colors {
  primary: string;
  background: string;
  subtitle: string;
  placeholder: string;
  onBackground: string;
  onPrimary: string;
}

interface Typography {
  titleSize: string;
  subtitleSize: string;
  textSize: string;
  buttonTextSize: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    typography: Typography;
  }
}
