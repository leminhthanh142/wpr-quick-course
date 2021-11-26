import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LeftArrowWhite from "../../../../sources/LeftArrowWhite";
import RightArrowWhite from "../../../../sources/RightArrowWhite";

export const ProductPreviewSlider: React.FC<{
  imageSource: string[];
  handleMouseOver: any;
}> = ({ imageSource, handleMouseOver }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    setPhotos(imageSource.slice(index, index + 5));
  }, [index]);

  const handleClickLeft = () => {
    if (index <= 0) return;
    setIndex(index - 1);
  };

  const handleClickRight = () => {
    const IMG_LENGTH = imageSource.length;
    if (index >= IMG_LENGTH - 5) return;
    setIndex(index + 1);
  };

  return (
    <Container>
      {imageSource.length >= photos.length && (
        <div>
          <span onClick={handleClickLeft} className="left-btn">
            <LeftArrowWhite />
          </span>
          <span onClick={handleClickRight} className="right-btn">
            <RightArrowWhite />
          </span>
        </div>
      )}
      <ImgWrapper columns={photos.length}>
        {photos.map((photo, i) => (
          <img
            key={i}
            alt="item"
            src={photo}
            onFocus={handleMouseOver}
            onMouseOver={handleMouseOver}
          />
        ))}
      </ImgWrapper>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 10px;
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #59595986;
    width: 30px;
    height: 50px;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  & .left-btn {
    left: 0;
  }
  & .right-btn {
    right: 0;
  }
`;
const ImgWrapper = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  gap: 0 5px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    :hover {
      outline: 3px solid #ee4d2d;
    }
  }
`;
