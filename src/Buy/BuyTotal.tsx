import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InputNumber } from "antd";
import { Formatter } from "../BodyContent/Currency";
import FormPage from "../Context/Fornpage";

type TProduct = {
  id: number;
  images: string;
  title: string;
  price: number;
};

const BuyToTal = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<TProduct | null>(null);
  const [totalPay, setTotalPay] = useState<number>(0);
  const [values, setValues] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      navigate(window.location.pathname);
    };
    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  useEffect(() => {
    const getProduct = localStorage.getItem("products");
    if (getProduct) {
      const products: TProduct[] = JSON.parse(getProduct);
      const selectedProduct = products.find((p) => p.id === parseInt(id!, 10));
      setProduct(selectedProduct || null);
    }
  }, [id]);

  const handleAfter = () => {
    setValues((prev) => {
      const newValue = Math.max(prev - 1, 1);
      localStorage.setItem("selectedQuantity", newValue.toString());
      return newValue;
    });
  };

  const handlePre = () => {
    setValues((prev) => {
      const newValue = Math.min(prev + 1, 10);
      localStorage.setItem("selectedQuantity", newValue.toString());
      return newValue;
    });
  };

  useEffect(() => {
    if (product) {
      const total = product.price * values;
      setTotalPay(total);
    }
  }, [product, values]);

  useEffect(() => {
    const savedQuantity = localStorage.getItem("selectedQuantity");
    if (savedQuantity) {
      setValues(parseInt(savedQuantity, 10));
    }
  }, []);

  useEffect(() => {
    const formattedTotal = Formatter({ number: totalPay });
    localStorage.setItem("totalPay", formattedTotal);
  }, [totalPay]);

  return (
    <>
      <div className="flex gap-2 p-3">
        <img
          src={product?.images}
          alt={product?.title}
          style={{
            width: "100px",
            height: "auto",
            border: "1px solid",
            background: "rgb(242, 244, 247)",
          }}
        />
        <div className="m-3">
          <h2>Tên sản phẩm: {product?.title}</h2>
          <div className="flex w-[180px]">
            <button className="handleAfter w-[50px] p-2" onClick={handleAfter}>
              -
            </button>
            <InputNumber
              controls={false}
              min={1}
              max={10}
              value={values}
              onChange={(value) => value && setValues(value)}
              className="w-[50px] p-1"
            />
            <button className="handleAfter w-[50px] p-2" onClick={handlePre}>
              +
            </button>
          </div>
          <h3>
            Giá: <Formatter number={totalPay} />
          </h3>
        </div>
      </div>
      <div className="Form">
        <div className="HeaderForm">
          <h2 className="Title p-3">Thêm thông tin giao hàng</h2>
          <hr className="Title_" />
          <FormPage />
        </div>
      </div>
    </>
  );
};

export default BuyToTal;
