/*
 * select size 정의
 * @params size = large , medium , small
 */
const SelectSizes = {
  height: (size: string) => {
    switch (size) {
      case "large":
        return 70;
      case "medium":
        return 50;
      case "small":
        return 10;
    }
  },
  font: (size: string) => {
    switch (size) {
      case "large":
        return 16;
      case "medium":
        return 12;
      case "small":
        return 10;
    }
  },
  padding: (size: string) => {
    switch (size) {
      case "large":
        return 30;
      case "medium":
        return 20;
      case "small":
        return 15;
    }
  },
};
export default SelectSizes;
