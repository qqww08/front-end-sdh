import baseStyled, { css, ThemedStyledInterface } from "styled-components";

const color = {
  blue: "#2054ae",
  pink: "#c43683",
  black: "#24272a",
};

const themes = {
  color,
};

export type Theme = typeof themes;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default themes;
