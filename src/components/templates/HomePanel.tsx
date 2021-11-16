import styled from 'styled-components';
import React from 'react';
import Slider from '../organisms/Slider';
import SalesPanel from '../organisms/SalesPanel';

const HomePanel = function () {
  return (
    <Container>
      <Slider />
      <SalesPanel />
    </Container>
  );
};
export default HomePanel;
const Container = styled.div`
  display: flex;
  height: 240px;
  overflow: hidden;
`;
