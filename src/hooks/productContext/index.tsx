import React, {
  useState, useContext, createContext, useMemo,
} from "react";
import { ProductData } from "../../types/product";

interface ProductContextType {
  productList: ProductData[]
  handleSetProductList: (list: ProductData[]) => void
}

const ProductContext = createContext<ProductContextType>({
  productList: [],
  handleSetProductList: () => {},
});

export function useProductList() {
  return useContext(ProductContext);
}

export const ProductListContextProvider: React.FC = ({ children }) => {
  const [productList, setProductList] = useState<ProductData[]>([]);

  const handleSetProductList = (list: ProductData[]) => {
    console.log("asdasd");
    setProductList(list);
  };

  const value = useMemo(() => ({
    productList,
    handleSetProductList,
  }), []);
  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
