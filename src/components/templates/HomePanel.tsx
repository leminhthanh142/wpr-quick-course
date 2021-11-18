import styled from "styled-components/macro";
import React from "react";
import Slider from "../organisms/Slider";
import { SalesPanel } from "../organisms/SalesPanel";

export const HomePanel = () => (
  <Container>
    <Slider />
    <SalesPanel />
  </Container>
);

const Container = styled.div`
  display: flex;
  height: 240px;
  overflow: hidden;
`;
