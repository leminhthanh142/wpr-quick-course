import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { Header } from "../../templates/Header";
import { Footer } from "../../templates/Footer";
import { ProductData } from "../../../types/product";

type Params = {
  id: string
}
type amountType = {
  amount: number
}
export const ProductDetails = () => {
  const { id } = useParams<Params>();
  const [data, setData] = useState<ProductData>();
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://619b10c827827600174453aa.mockapi.io/shopee-products/product/${id}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  return (
    <Container>
      <Header />
      <div>
        {data?.title}
      </div>
      <div>
        {data?.price}
      </div>
      <div>
        {data?.productSold}
      </div>
      <div>
        {data?.discount}
      </div>
      <img src={data?.imgLink} alt="" />
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
