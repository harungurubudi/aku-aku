export interface ThemeInterface {
  bgRed: string;
  bgBlue: string;
  bgYellow: string;
  bgGreen: string;
  bgGrey: string;

  bgPage: string;
  fontColor: string;

  fontFamilySansSerif: string;
  fontFamilyMonospace: string;

  containerWidth: number;
}

export const theme: ThemeInterface = {
  bgRed: "#FFBDAD",
  bgBlue: "#B3D4FF",
  bgYellow: "#FFF0B3",
  bgGreen: "#ABF5D1",
  bgGrey: "#DFE1E6",

  bgPage: "#fff",
  fontColor: "#111",

  fontFamilySansSerif:
    '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;',
  fontFamilyMonospace:
    '"SF Mono", "Segoe UI Mono", "Roboto Mono", Menlo, Courier, monospace;',
  containerWidth: 1100
};
