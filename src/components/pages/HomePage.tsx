import React from "react";
import styled from "styled-components/macro";
import Popup from "../atoms/PopupAd";
import AdPanel from "../organisms/AdPanel";
import { ProductCategory } from "../organisms/Catagory";
import TrendingPanel from "../organisms/TrendingPanel";
import { HomePanel } from "../templates/HomePanel";

export const HomePage = () => (
  <>
    <Popup />
    <Body>
      <Shrink>
        <Hightlight>
          <HomePanel />
          <TrendingPanel />
        </Hightlight>
        <AdPanel />
        <ProductCategory />
      </Shrink>
    </Body>
  </>
);
const Hightlight = styled.div`
  background: white;
  padding: 30px 10px 0 10px; ;
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
  flex-dirention: column;
`;
