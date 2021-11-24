import styled from "styled-components/macro";
import React from "react";
import EventSlider from "../../../mocules/HomeCompnents/EventSlider";
import { SalesPanel } from "../SalesPanel";

export const HomePanel = () => (
  <Container>
    <EventSlider />
    <SalesPanel />
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 240px;
  overflow: hidden;
`;
