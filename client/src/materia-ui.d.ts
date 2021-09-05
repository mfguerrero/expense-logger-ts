// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

interface Custom {
  dark: string;
  medium: string;
  light: string;
  main: string;
  mainDark: string;
  contrast: string;
  textGray: string;
}

declare module "@material-ui/core/styles/createPalette" {
  export interface PaletteOptions {
    custom: Custom;
  }
  export interface Palette {
    custom: Custom;
  }
}
