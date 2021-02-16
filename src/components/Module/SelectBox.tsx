import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import SelectTypes from "../../utils/select-types";
type Option = {
  value: string;
  label: string;
};
interface Props {
  type: string;
  sizes: string;
  options: Option[];
}
const SelectBox = ({ type, sizes, options }: Props) => {
  const [data, setData] = useState<string>("");
  const selectHandler = (selected) => {
    setData(selected);
  };
  const customStyles = {
    option: (provided, state) => {
      console.log(state);
      console.log(provided);
      return {
        ...provided,
        opacity: 0.8,
        padding: 20,
        color: state.isSelected
          ? `${SelectTypes.select(type).color}`
          : `${SelectTypes.value(type).color}`,
        backgroundColor: state.isSelected
          ? `${SelectTypes.select(type).back}`
          : `${SelectTypes.value(type).back}`,
        "&:hover": {
          backgroundColor: `${SelectTypes.select(type).back}`,
        },
      };
    },
    control: (provided) => {
      console.log(provided);
      return {
        ...provided,
        width: 200,
        border: `1px solid ${SelectTypes.input(type).border}`,
        backgroundColor: `${SelectTypes.input(type).back}`,
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
      <Select options={options} value={data} onChange={selectHandler} styles={customStyles} />
    </__Wrapper>
  );
};
const __Wrapper = styled.div`
  width: 200px;
`;
export default SelectBox;
