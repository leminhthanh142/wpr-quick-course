import React, { useState } from "react";
import styled from "styled-components/macro";
import { ProductPreviewSlider } from "../../../mocules/DetailPageComponents/ProductPreviewSlider";

export const ProductPreview = () => {
  const [currentImage, setCurrentImage] = useState<string>(IMAGES[0]);
  const handleMouseOver = (e: any) => setCurrentImage(e.currentTarget.src);

  return (
    <Container>
      <img src={currentImage} alt="selected" />
      <ProductPreviewSlider
        handleMouseOver={handleMouseOver}
        imageSource={IMAGES}
      />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  user-select: none;
`;

const IMAGES = [
  "https://cf.shopee.sg/file/ef1f3dfe1379a24a2c73cf905cc34489_xxhdpi",
  "https://cf.shopee.sg/file/a2f484aeed0e231b34677cc0d1b925e7_xxhdpi",
  "https://cf.shopee.sg/file/214d9e351a7150ffc3afc36a0c82bb85_xxhdpi",
  "https://cf.shopee.sg/file/c975bb65a3aa2c1e8a2e743a6129af0a_xxhdpi",
  "https://cf.shopee.sg/file/2bbc571d3b2573d1706f3dc38814943a_xxhdpi",
  "https://cf.shopee.sg/file/97ce2af302ce2765f351f51817344206_xxhdpi",
  "https://cf.shopee.sg/file/75e4697902a688cacf4ee548cabb0225_xxhdpi",
];
