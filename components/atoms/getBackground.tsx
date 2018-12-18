import { ThemeInterface } from "../theme";
export const getBackground = (background?: string, theme?: ThemeInterface) => {
  if (background) {
    return theme[
      `bg${background.charAt(0).toUpperCase() + background.slice(1)}`
    ];
  }
  return theme.bgGrey;
};
