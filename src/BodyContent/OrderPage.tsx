import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Formatter } from "./Currency";
import { useNavigate } from "react-router-dom";

type TPage = {
  id: number;
  images: string;
  title: string;
  price: number;
};

const OrderPage = () => {
  const product = async () => {
    try {
      const catchData = localStorage.getItem("products");
      if (catchData) return JSON.parse(catchData);
      const response = await axios.get("https://dummyjson.com/products");
      const allreponse = response.data.products;
      const productSlice = allreponse.slice(0, 15);
      localStorage.setItem("products", JSON.stringify(productSlice));
      return productSlice;
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const handle = (id: number) => {
    navigate(`/OrderNow/${id}`);
  };
  const queryproduct = useQuery<TPage[]>({
    queryKey: ["products"],
    queryFn: product,
  });
  if (queryproduct.isLoading) {
    return <Skeleton count={10} />;
  }
  if (queryproduct.isError) {
    return "LỗI 404";
  }

  return (
    <div>
      <div className="Head">DANH SÁCH SẢN PHẨM</div>
      {queryproduct.data?.map((product) => (
        <div key={product.id} className=" OrderProcess  ">
          <img
            src={product.images}
            alt={product.title}
            style={{
              width: "150px",
              height: "auto",
            }}
          />
          <div className="title">{product.title}</div>
          <div>
            <Formatter number={product.price} />
          </div>
          <div className="Button" onClick={() => handle(product.id)}>
            Xem ngay
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
