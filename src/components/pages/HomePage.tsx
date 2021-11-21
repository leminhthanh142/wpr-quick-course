import React from "react";
import styled from "styled-components/macro";
import Popup from "../UI/atoms/PopupAd";
import AdPanel from "../UI/organisms/PrimaryAd";
import { Catagories } from "../UI/organisms/Catagories";
import TrendingPanel from "../UI/organisms/TrendingPanel";
import { HomePanel } from "../UI/organisms/HomePanel";
import { FlashSalePanel } from "../UI/organisms/FlashSale";
import CompositeAds from "../UI/organisms/SecondaryAd";
import { Header } from "../templates/Header";
import { Footer } from "../templates/Footer";
import { TopSearchBar } from "../UI/organisms/TopSearchPanel";
import SuggestCard from "../UI/mocules/SuggestCard";

export const HomePage = () => (
  <>
    <Popup />
    <Header />
    <Body>
      <Shrink>
        <Hightlight>
          <HomePanel />
          <TrendingPanel />
        </Hightlight>
        <AdPanel />
        <Catagories />
        <FlashSalePanel />
        <CompositeAds />
        <TopSearchBar />
      </Shrink>
    </Body>
    <Footer />
  </>
);
const Hightlight = styled.div`
  background: white;
  padding: 30px 10px 0 10px;
`;
const Shrink = styled.div`
  width: 75%;
  @media (max-width: 1000px) {
    width: 98%;
  } ;
`;
const Body = styled.div`
  display: flex;
  justify-content: center;
  background: url("https://cf.shopee.vn/file/3d8d18abbf445264d2b06638653b364c")
    center top / 100% no-repeat;
`;
