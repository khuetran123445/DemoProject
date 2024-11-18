import { Alert } from "antd";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AppContext, PayContext } from "../Context/Context";
import { Formatter } from "../BodyContent/Currency";

const Cart = () => {
  const navigate = useNavigate();
  const { Order } = useParams<{ Order: string }>();
  const { formdata } = useContext(AppContext);
  const { pay } = useContext(PayContext);
  const handle = () => {
    navigate("/");
  };
  return (
    <>
      <Alert
        message="Đặt hàng thành công"
        description="Quay lại trang chủ"
        onClick={handle}
        type="success"
        showIcon
        style={{ width: "400px", margin: "10px 400px", cursor: "pointer" }}
      />
      <div>Mã đơn hàng: {Order} </div>
      <div>Tên khách hàng:{formdata?.firstName}</div>
      <div>Số ĐT:</div>
      <div>
        Số tiền cần thanh toán:
        {pay?.totalPay ? <Formatter number={pay.totalPay} /> : "không có"}
      </div>
    </>
  );
};

export default Cart;
