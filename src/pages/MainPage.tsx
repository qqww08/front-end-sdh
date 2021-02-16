import React from "react";
import SelectBox from "../components/Module/SelectBox";
import styled from "styled-components";
import { FlexCenter } from "../styles/global-styles";
const options = [
  { value: "더기프팅컴퍼니", label: "더기프팅컴퍼니" },
  { value: "월간가슴", label: "월간가슴", isDisabled: true },
  { value: "인더웨어", label: "인더웨어" },
  { value: "프론트엔드 엔지니어", label: "프론트엔드 엔지니어" },
];
const MainPage = () => {
  return (
    <__Wrapper>
      <SelectBox sizes={"large"} options={options} />
      <SelectBox sizes={"medium"} options={options} />
      <SelectBox sizes={"small"} options={options} />
      <SelectBox sizes={"small"} options={[]} />
    </__Wrapper>
  );
};
const __Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  ${FlexCenter};
  flex-direction: column;
  & > div {
    margin: 20px 0;
  }
`;
export default MainPage;
