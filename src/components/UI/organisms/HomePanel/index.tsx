import styled from "styled-components/macro";
import React from "react";
import EventSlider from "../../mocules/EventSlider";
import { SalesPanel } from "../SalesPanel";
import { mediaQueryDesktop, mediaQueryTablet } from "../../../../shared/media";

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
