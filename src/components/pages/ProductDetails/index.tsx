import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { Header } from "../../templates/Header";
import { Footer } from "../../templates/Footer";
import { ProductData } from "../../../types/product";
import { ProductPreview } from "../../UI/organisms/DetailPageComponents/ProductPreview/index,";
import { SuggestionSlider } from "../../UI/organisms/DetailPageComponents/SuggestionSlider";

type Params = {
  id: string;
};
type amountType = {
  amount: number;
};
export const ProductDetails = () => {
  const { id } = useParams<Params>();
  const [data, setData] = useState<ProductData>();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `https://619b10c827827600174453aa.mockapi.io/shopee-products/product/${id}`,
      );
      setData(res.data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <Container>
      <Header />
      <div>{data?.title}</div>
      <div>{data?.price}</div>
      <div>{data?.productSold}</div>
      <div>{data?.discount}</div>
      <img src={data?.imgLink} alt="" />
      <ProductPreview />
      <SuggestionSlider suggestData="https://619b10c827827600174453aa.mockapi.io/shopee-products/product" />
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
