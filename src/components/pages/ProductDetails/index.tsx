import React from "react";
import styled from "styled-components/macro";
import { useParams } from "react-router-dom";
import { Header } from "../../templates/Header";
import { Footer } from "../../templates/Footer";
import { DATAs } from "../../UI/organisms/SuggestPanel";

type Params = {
  id: string
}

export const ProductDetails = () => {
  const { id } = useParams<Params>();
  return (
    <div>
      <Header />
      <div>
        {DATAs[Number(id) - 1].title}
      </div>
      <div>
        {DATAs[Number(id) - 1].price}
      </div>
      <div>
        {DATAs[Number(id) - 1].productSold}
      </div>
      <div>
        {DATAs[Number(id) - 1].discount}
      </div>
      <div>
        {DATAs[Number(id) - 1].imgLink}
      </div>
      <Footer />
    </div>
  );
};
