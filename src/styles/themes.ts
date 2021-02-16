import baseStyled, { css, ThemedStyledInterface } from "styled-components";

const selectBox = {
  defaultBorder: "#b8b8b8",
  defaultBack: "#ffffff",
  hoverBorder: "#4f8dbf",
  hoverBack: "#ffffff",
  focusedBorder: "#3b68ce",
  focusedBack: "#ffffff",
  disabledBorder: "#a1a1a1",
  disabledBack: "#f6f6f6",

  defaultValueC: "#383838",
  defaultValueB: "#ffffff",
  hoverValueC: "#7f7f7f",
  hoverValueB: "#6bcaf3",
  disabledValueC: "#d0d0d0",
  disabledValueB: "#f3f3f3",

  selectDefaultValueC: "#171717",
  selectDefaultValueB: "#afafaf",
  selectHoverValueC: "#555555",
  selectHoverValueB: "#6bcaf3",
  selectDisabledValueC: "#575757",
  selectDisabledValueB: "#f3f3f3",
};

const themes = {
  selectBox,
};

export type Theme = typeof themes;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default themes;
