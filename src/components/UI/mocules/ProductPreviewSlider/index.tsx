import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LeftArrow from "../../../sources/LeftArrow";
import RightArrow from "../../../sources/RightArrow";

const ProductPreviewSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    setPhotos(images.slice(index, index + 5));
  }, [index]);
  return (
    <Container>
      <span onClick={() => setIndex(index - 1)} className="left-btn">
        <LeftArrow />
      </span>
      <ImgWrapper>
        {photos.map((photo) => (
          <img alt="item" src={photo} />
        ))}
      </ImgWrapper>
      <span onClick={() => setIndex(index + 1)} className="right-btn">
        <RightArrow />
      </span>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  & span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  & .left-btn {
    left: 0;
  }
  & .right-btn {
    right: 0;
  }
`;
const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & img {
    width: calc((100% / 5) - 10);
  }
`;
