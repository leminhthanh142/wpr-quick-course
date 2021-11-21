import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Header } from "../../templates/Header";
import { Footer } from "../../templates/Footer";
import { ProductData } from "../../../types/product";

type Params = {
  id: string
}

export const ProductDetails = () => {
  const { id } = useParams<Params>();
  const [data, setData] = useState<ProductData>();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`https://619a6e572782760017445234.mockapi.io/product/${id}`);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
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
    </div>
  );
};
