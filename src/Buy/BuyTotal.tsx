import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { InputNumber } from "antd";
import { Formatter } from "../BodyContent/Currency";

const schema = yup
  .object({
    firstName: yup.string().required("Vui lòng điền trường này"),
    address: yup.string().required("Vui lòng điền trường này"),
    email: yup.string(),
    Time: yup
      .number()
      .required("Thời gian phải là số")
      .typeError("Thời gian phải là số"),
    number: yup
      .number()
      .required("Số điện thoại phải là số")
      .typeError("Số điện thoại phải là số"),
  })
  .required();

type User = yup.InferType<typeof schema>;

type TProduct = {
  id: number;
  images: string;
  title: string;
  price: number;
};

const BuyToTal = () => {
  const { id } = useParams();
  const [product, setproduct] = useState<TProduct | null>(null);
  const [totalPay, settotalPay] = useState<number>(0);
  const [values, setvalues] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    const getproduct = localStorage.getItem("products");
    if (getproduct) {
      const products: TProduct[] = JSON.parse(getproduct);
      const selecProduct = products.find((p) => p.id === parseInt(id!, 10));
      setproduct(selecProduct || null);
    }
  }, [id]);

  const handleAfter = () => {
    setvalues((prev) => {
      const newValue = Math.max(prev - 1, 1);
      localStorage.setItem("selectedQuantity", newValue.toString());
      return newValue;
    });
  };
  const handlePre = () => {
    setvalues((prev) => {
      const newValue = Math.min(prev + 1, 10);
      localStorage.setItem("selectedQuantity", newValue.toString());
      return newValue;
    });
  };

  useEffect(() => {
    if (product) {
      const totalPay =
        product.price *
        (typeof values === "number" ? values : parseInt(values, 10));
      settotalPay(totalPay);
    }
  }, [product, values]);

  //cập nhập lại giá trị
  useEffect(() => {
    const savedQuantity = localStorage.getItem("selectedQuantity");

    if (savedQuantity) {
      setvalues(parseInt(savedQuantity, 10));
    }
  }, []);
  useEffect(() => {
    const formattedTotal = Formatter({ number: totalPay });

    // Save the formatted string in `localStorage`
    localStorage.setItem("totalPay", formattedTotal);
  }, [totalPay]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: User) => {
    console.log(data);

    navigate(`/ShoppingCart/${id}`);
  };

  return (
    <>
      <div className="flex gap-2 p-3">
        <img
          src={product?.images}
          alt={product?.title}
          style={{
            width: "100px",
            height: "auto",
            border: "1px solid ",
            background: "rgb(242, 244, 247)",
          }}
        />
        <div className=" m-3  ">
          <h2>Tên sản phẩm: {product?.title}</h2>

          <div className="flex  w-[180px]   ">
            <div>
              <button
                className="handleAfter w-[50px] p-2  "
                onClick={handleAfter}
              >
                -
              </button>
            </div>

            <div className="flex ">
              <InputNumber
                controls={false}
                min={1}
                max={10}
                value={values}
                onChange={(values) => {
                  if (values != null) {
                    setvalues(values);
                  }
                }}
                className="w-[50px] p-1"
              />
              <button
                className="handleAfter w-[50px] p-2  "
                onClick={handlePre}
              >
                +
              </button>
            </div>
          </div>

          <h3>
            Giá: <Formatter number={totalPay} />
          </h3>
        </div>
      </div>
      <div className="Form   ">
        <div className="HeaderForm">
          <h2 className="Title p-3">Thêm thông tin giao hàng</h2>
          <hr className="Title_"></hr>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flow_wrapper m-3 ">
          <div className="flex gap-[20px] ">
            <div>
              <p>Tên người nhận</p>
              <input
                {...register("firstName")}
                placeholder="* Bắt buộc"
                style={{
                  width: "340px",
                }}
                className={`border  w-full ${
                  errors.firstName ? "input-error" : ""
                }`}
              />
              <p style={{ color: "red" }}>{errors.firstName?.message}</p>
            </div>

            <div>
              <p>Số điện thoại</p>
              <input
                {...register("number")}
                placeholder="* Bắt buộc"
                style={{ width: "340px" }}
                className={`border rounded-md w-full ${
                  errors.number ? "input-error" : ""
                }`}
              />
              <p>{errors.number?.message}</p>
            </div>
          </div>
          <p>Email</p>
          <input
            {...register("email")}
            placeholder="Không bắt buộc, để gửi email xác nhận"
            className="border rounded-md w-full"
          />
          <p>{errors.email?.message}</p>
          <p>Địa chỉ</p>
          <input
            {...register("address")}
            placeholder="VD: Thôn 6, Ấp Bình Hưng (Bắt buộc)"
            className={`border rounded-md w-full ${
              errors.address ? "input-error" : ""
            }`}
          />
          <p>{errors.address?.message}</p>
          <p>Thời gian giao hàng tốt nhất</p>
          <input
            {...register("Time")}
            placeholder="Vd: 18:00"
            className={`border rounded-md w-full ${
              errors.address ? "input-error" : ""
            }`}
          />
          <p>{errors.Time?.message}</p>
          <input
            type="submit"
            style={{ width: "150px" }}
            value="ĐẶT HÀNG"
            className="Submit"
          />
        </form>
      </div>
    </>
  );
};

export default BuyToTal;
