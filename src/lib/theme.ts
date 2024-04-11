import lightThemeRawCss from "../themes/light.css?raw";

export enum Theme {
  LIGHT,
}

function getRawCssByTheme(theme: Theme) {
  switch (theme) {
    case Theme.LIGHT:
      return lightThemeRawCss;
    default:
      return lightThemeRawCss;
  }
}

export function setUITheme(theme: Theme) {
  const style = document.getElementById("css-theme");
  if (!style) return;
  style.textContent = getRawCssByTheme(theme);
}
