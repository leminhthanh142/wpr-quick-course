import React from "react";
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import { Header } from "../../templates/Header";
import { Footer } from "../../templates/Footer";

type Params = {
  id: string
}

export const ProductDetails = () => {
  const { id } = useParams<Params>();
  console.log("id", id);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
