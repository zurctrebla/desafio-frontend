import colors, { ColorsInterface } from "./colors";
import fonts, { FontsInterface } from "./fonts";
export interface ThemeInterface {
  colors: ColorsInterface;
  fonts: FontsInterface;
}

const theme: ThemeInterface = {
  colors,
  fonts,
};

export default theme;
