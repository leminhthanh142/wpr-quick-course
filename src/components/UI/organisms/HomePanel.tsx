import styled from "styled-components/macro";
import React from "react";
import EventSlider from "../mocules/EventSlider";
import { SalesPanel } from "./SalesPanel";

export const HomePanel = () => (
  <Container>
    <EventSlider />
    <SalesPanel />
  </Container>
);

const Container = styled.div`
  display: flex;
  height: 240px;
  overflow: hidden;
`;
