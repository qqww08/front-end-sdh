import themes from "../styles/themes";
/*
 * select type 색상 정의
 * @params type = default, hover,focused,disalbled
 */
const SelectTypes = {
  input: (type: string) => {
    switch (type) {
      case "default":
        return { border: themes.selectBox.defaultBorder, back: themes.selectBox.defaultBack };
      case "hover":
        return { border: themes.selectBox.hoverBorder, back: themes.selectBox.hoverBack };
      case "focused":
        return { border: themes.selectBox.focusedBorder, back: themes.selectBox.focusedBack };
      case "disabled":
        return { border: themes.selectBox.disabledBorder, back: themes.selectBox.disabledBack };
    }
  },
  value: (type: string) => {
    switch (type) {
      case "default":
        return { color: themes.selectBox.defaultValueC, back: themes.selectBox.defaultValueB };
      case "hover":
        return { color: themes.selectBox.hoverValueC, back: themes.selectBox.hoverValueB };
      case "disabled":
        return { color: themes.selectBox.disabledValueC, back: themes.selectBox.disabledValueB };
    }
  },
  select: (type: string) => {
    switch (type) {
      case "default":
        return {
          color: themes.selectBox.selectDefaultValueC,
          back: themes.selectBox.selectDefaultValueB,
        };
      case "hover":
        return {
          color: themes.selectBox.selectHoverValueC,
          back: themes.selectBox.selectHoverValueB,
        };
      case "disabled":
        return {
          color: themes.selectBox.selectDisabledValueC,
          back: themes.selectBox.selectDisabledValueB,
        };
    }
  },
};
export default SelectTypes;
