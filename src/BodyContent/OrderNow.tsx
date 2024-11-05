import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Formatter } from "./Currency";
import { Radio } from "@mui/material";
import Button from "react-bootstrap/Button";

import * as React from "react";
import BuyNow from "../Buy/BuyNow";

type TProduct = {
  id: number;
  images: string;
  title: string;
  price: number;
};

const OrderNow = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [product, setProduct] = useState<TProduct | null>(null);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [values, setValues] = useState<number | string>("1");
  const [totalPay, settotalPay] = useState<number>(0);

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = e.target.value;
    if (newValues === "") {
      setValues("");
      return;
    }
    const parseValue = parseInt(newValues, 10);
    if (parseValue < 1 || isNaN(parseValue)) {
      handleQuantityChange(1);
    } else {
      handleQuantityChange(parseValue);
    }
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = e.target.value;
    if (newValues === "") {
      handleQuantityChange(1);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  const handleButton = () => {
    console.log("da click ordernow");
  };
  const handleQuantityChange = (newQuantity: number | string) => {
    setValues(newQuantity);
    localStorage.setItem("selectedQuantity", newQuantity.toString());
  };

  useEffect(() => {
    const getProduct = localStorage.getItem("products");
    if (getProduct) {
      const products: TProduct[] = JSON.parse(getProduct);
      const selectedProduct = products.find((p) => p.id === parseInt(id!, 10));
      setProduct(selectedProduct || null);
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      const totalPay =
        product.price *
        (typeof values === "number" ? values : parseInt(values, 10));
      settotalPay(totalPay);
      console.log("render");
    }
    if (values === "") {
      settotalPay(product?.price || 1);
    }
  }, [product, values]);

  if (!product) {
    return <div>No product selected</div>; // Xử lý trường hợp không có sản phẩm
  }

  return (
    <div className="flex justify-center Order h-[580px] p-3 gap-4">
      <div className="  Orderimg ">
        <img
          src={product.images}
          alt={product.title}
          style={{
            width: "400px",
            height: "400px",
            border: "1px solid ",
            background: "rgb(242, 244, 247)",
          }}
        />
      </div>
      <div className="     OrderItem   ">
        <div>
          <h1 className="py-3">{product.title}</h1>
          <h2 className="py-3 ">
            <Formatter number={product.price} />
          </h2>
          <div>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              sx={{
                color: "#c0171f", // Màu khi không được chọn
                "&.Mui-checked": {
                  color: "#c0171f", // Màu khi được chọn
                },
              }}
            />
            64G
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
              sx={{
                color: "#c0171f", // Màu khi không được chọn
                "&.Mui-checked": {
                  color: "#c0171f", // Màu khi được chọn
                },
              }}
            />
            256G
          </div>
          <h3 className="py-3 ">
            Số lượng:
            <input
              className="OrderInput"
              type="text"
              value={values}
              min="1"
              onChange={handle}
              onBlur={handleBlur}
            />
          </h3>
          <h3 className="py-3">
            Thanh toán: <Formatter number={totalPay} />
          </h3>
          <div className="flex gap-2" onClick={handleButton}>
            <div
              style={{
                fontWeight: "bold",
                borderRadius: "10px",
                background: "red",
              }}
            >
              <BuyNow />
            </div>
            <Button
              style={{ color: "white", fontWeight: "bold" }}
              variant="warning w-[230px]"
            >
              GỌI TƯ VẤN <br />
              <span>08 9898 1637 </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderNow;
