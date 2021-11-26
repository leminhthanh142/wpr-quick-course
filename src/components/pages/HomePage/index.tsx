import React from "react";
import styled from "styled-components/macro";
import Popup from "../../UI/atoms/PopupAd";
import AdPanel from "../../UI/organisms/HomeComonents/PrimaryAd";
import { Catagories } from "../../UI/organisms/HomeComonents/Catagories";
import TrendingPanel from "../../UI/organisms/HomeComonents/TrendingPanel";
import { HomePanel } from "../../UI/organisms/HomeComonents/HomePanel";
import { FlashSalePanel } from "../../UI/organisms/HomeComonents/FlashSale";
import CompositeAds from "../../UI/organisms/HomeComonents/SecondaryAd";
import { Header } from "../../templates/Header";
import { Footer } from "../../templates/Footer";
import { TopSearchBar } from "../../UI/organisms/HomeComonents/TopSearchPanel";
import { Suggestion } from "../../UI/organisms/HomeComonents/SuggestPanel";
import { ProductListContextProvider } from "../../../hooks/productContext";

export const HomePage = () => (
  <ProductListContextProvider>
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
        <Suggestion />
      </Shrink>
    </Body>
    <Footer />
  </ProductListContextProvider>
);

const Hightlight = styled.div`
  background: white;
  padding: 30px 10px 0 10px;
`;

const Shrink = styled.div`
  max-width: 1200px;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  background: url("https://cf.shopee.vn/file/3d8d18abbf445264d2b06638653b364c")
    center top / 100% no-repeat;
`;
