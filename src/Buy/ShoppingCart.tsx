import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useEffect, useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Space } from "antd";
import { useParams } from "react-router-dom";
import { Formatter } from "../BodyContent/Currency";

type User = yup.InferType<typeof schema>;
type TProduct = {
  id: number;
  images: string;
  title: string;
  price: number;
};
const schema = yup
  .object({
    firstName: yup.string().required("Vui lòng nhập tên"),
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .email("Email không hợp lệ"),
    number: yup
      .number()
      .required("Vui lòng nhập số điện thoại")
      .typeError("Phải là số"),
    address: yup.string().required("Vui lòng nhập địa chỉ"),
  })
  .required();

const ShoppingCart = () => {
  const [value, setValue] = useState(1);
  const [values, setvalues] = useState(1);

  const [transport, settransport] = useState(30);
  const [product, setProduct] = useState<TProduct | null>(null);
  const { id } = useParams();

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const saved = localStorage.getItem("selectedQuantity");
    if (saved) {
      setvalues(parseInt(saved, 10));
    }
  }, []);

  useEffect(() => {
    const getProduct = localStorage.getItem("products");
    if (getProduct) {
      const products: TProduct[] = JSON.parse(getProduct);
      const selectedProduct = products.find((p) => p.id === parseInt(id!, 10));
      setProduct(selectedProduct || null);
    }
  }, [id]);

  useEffect(() => {
    if (transport === 30) {
      settransport(30);
    }
  });

  const totalPay = product ? product.price * values + transport : 0;

  if (!product) {
    return <div>No product selected</div>;
  }

  const onSubmit = (data: User) => {
    console.log("Form Data:", data);
    // handle form submission here
  };

  return (
    <div className="flex gap-3">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Phương thức giao hàng</p>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={value}>
              Giao hàng tận nơi (Cước vận chuyển: 30.000₫)
            </Radio>
          </Radio.Group>
          <p>Phương thức thanh toán</p>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value={1}>
                Bank transfer/Virement Ngân Hàng Quân Đội MBbank Số Tài Khoản :
                1567567999999 Chủ Tài Khoản : Nguyễn Duy Ngọc
              </Radio>
              <Radio value={2}>
                Thanh toán COD Khách hàng thanh toán tại shop hoặc cho người
                giao hàng.
              </Radio>
            </Space>
          </Radio.Group>
          <p>infomation</p>

          <p>Tên:</p>
          <input {...register("firstName")} />
          <p style={{ color: "red" }}>{errors.firstName?.message}</p>

          <p>Email:</p>
          <input {...register("email")} />
          <p style={{ color: "red" }}>{errors.email?.message}</p>

          <p>Số điện thoại:</p>
          <input {...register("number")} />
          <p style={{ color: "red" }}>{errors.number?.message}</p>

          <p>Địa chỉ:</p>
          <input {...register("address")} />
          <p style={{ color: "red" }}>{errors.address?.message}</p>

          <div>
            <h3>Danh sách sản phẩm</h3>
            <p>Số lượng: {values}</p>
            <div>
              <img
                src={product.images}
                alt={product.title}
                style={{
                  width: "200px",
                  height: "200px",
                  border: "1px solid",
                  background: "rgb(242, 244, 247)",
                }}
              />
              <div>Tên sản phẩm: {product.title}</div>
            </div>
            <div>
              <p>
                Tiền sản phẩm: <Formatter number={product.price * values} />
              </p>
              <p>
                Cước vận chuyển: <Formatter number={transport} />
              </p>
              <p>
                <strong>
                  Tổng thanh toán: <Formatter number={totalPay} />
                </strong>
              </p>
            </div>
          </div>

          <input type="submit" value="HOÀN TẤT ĐẶT HÀNG" />
        </form>
      </div>
    </div>
  );
};

export default ShoppingCart;
