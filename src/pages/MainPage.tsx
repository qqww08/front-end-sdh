import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { getMarkets } from "../store/coinGaeko/markets/actions/getMarkets";
import CoinList from "../components/main/CoinList";
import BookMarkList from "../components/main/BookMarkList";
import { localStorageData } from "../common";
import { getCoinDetail } from "../store/coinGaeko/markets/actions/getCoinDetail";
import Loading from "../components/Loading";

const MainPage = () => {
  const [tab, setTab] = useState<number>(0);
  const tabList = ["가상자산 시세 목록", "북마크 목록"];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMarkets({
        vs_currency: "krw",
        per_page: "50",
        page: "1",
      })
    );
    dispatch(getCoinDetail({ id: localStorageData }));
  }, []);
  return (
    <__Wrapper>
      {tabList.map((item, index) => {
        return (
          <__Tab key={index} onClick={() => setTab(index)} bgColor={tab === index}>
            {item}
          </__Tab>
        );
      })}
      {tab === 0 && <CoinList />}
      {tab === 1 && <BookMarkList />}
    </__Wrapper>
  );
};
const __Wrapper = styled.div`
  width: 1200px;
`;
const __BgShadow = css`
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;
const __Tab = styled.button<{ bgColor: boolean }>`
  background: ${(props) => (props.bgColor ? "#ffffff" : "#6c6c6c")};
  cursor: pointer;
  font-weight: bold;
  padding: 20px 0;
  width: 50%;
  ${(props) => props.bgColor && __BgShadow}
`;
export default MainPage;
