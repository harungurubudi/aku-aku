export interface ThemeInterface {
  red: string;
  blue: string;
  yellow: string;
  green: string;
  grey: string;
  pink: string;
  white: string;
  black: string;

  background: (isDarkMode?: boolean) => string;
  fontColor: (isDarkMode?: boolean) => string;

  fontFamilySansSerif: string;
  fontFamilyMonospace: string;

  containerWidth: number;
}

export const theme: ThemeInterface = {
  red: "#ef596f",
  blue: "#52adf2",
  yellow: "#d8985f",
  green: "#89ca78",
  grey: "#abb2bf",
  pink: "#d55fde",
  white: "#fff",
  black: "#282c34",

  background: isDarkMode => {
    return isDarkMode ? "#282c34" : "#fff";
  },
  fontColor: isDarkMode => {
    return isDarkMode ? "#fff" : "#282c34";
  },

  fontFamilySansSerif:
    '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;',
  fontFamilyMonospace:
    '"SF Mono", "Segoe UI Mono", "Roboto Mono", "Droid Sans Mono", Menlo, monospace;',
  containerWidth: 1100
};
