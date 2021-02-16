import React, { useRef, useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import themes from "../../styles/themes";
import SelectSizes from "../../utils/select-sizes";
type Option = {
  value: string;
  label: string;
};
interface Props {
  sizes: string;
  options?: Option[];
}
const SelectBox = ({ sizes, options }: Props) => {
  const [data, setData] = useState<string>("");
  const selectRef = useRef(null);
  // select 선택 후
  const selectHandler = (selected) => {
    setData(selected);
    selectRef.current.select.blur();
  };
  // react-select styles 커스텀
  const customStyles = {
    // select 옵션
    option: (provided, state) => {
      // console.log(state);
      // console.log(provided);
      return {
        ...provided,
        width: 300,
        padding: Number(`${SelectSizes.padding(sizes)}`),
        fontSize: Number(`${SelectSizes.font(sizes)}`),
        color: state.isDisabled
          ? `${themes.selectBox.disabledValueC}`
          : state.isSelected
          ? `${themes.selectBox.selectDefaultValueC}`
          : `${themes.selectBox.defaultValueC}`,
        backgroundColor: state.isDisabled
          ? `${themes.selectBox.disabledValueB}`
          : state.isSelected
          ? `${themes.selectBox.selectDefaultValueB}`
          : `${themes.selectBox.defaultValueB}`,
        "&:hover": {
          backgroundColor: state.isDisabled
            ? `${themes.selectBox.disabledValueB}`
            : state.isSelected
            ? `${themes.selectBox.selectHoverValueB}`
            : `${themes.selectBox.hoverValueB}`,
        },
      };
    },
    //select
    control: (provided, state) => {
      // console.log(state);
      // console.log(provided);
      return {
        ...provided,
        width: 300,
        height: Number(`${SelectSizes.height(sizes)}`),
        fontSize: Number(`${SelectSizes.font(sizes)}`),
        backgroundColor: state.isDisabled && `${themes.selectBox.disabledBack}`,
        border: state.isFocused
          ? `1px solid ${themes.selectBox.focusedBorder}`
          : `1px solid ${themes.selectBox.defaultBorder}`,
        "&:hover": {
          border: `1px solid ${themes.selectBox.hoverBorder}`,
        },
      };
    },
    placeholder: (provided, state) => {
      return {
        ...provided,
        color: state.isDisabled && `${themes.selectBox.disabledColor}`,
      };
    },
    singleValue: (provided, state) => {
      return {
        ...provided,
        color: state.data.color,
      };
    },
  };

  return (
    <__Wrapper>
      <Select
        placeholder={`${sizes[0].toUpperCase()}${sizes.slice(1, sizes.length)} Select`}
        options={options}
        value={data}
        onChange={selectHandler}
        styles={customStyles}
        isDisabled={options.length === 0}
        ref={selectRef}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </__Wrapper>
  );
};

const __Wrapper = styled.div`
  input {
    color: transparent !important;
    text-shadow: 0 0 0 black !important;
  }
`;
export default SelectBox;
