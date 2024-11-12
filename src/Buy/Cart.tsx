import { Alert } from "antd";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { Order } = useParams<{ Order: string }>();

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
      <div>Tên khách hàng:</div>
      <div>Số ĐT:</div>
      <div>Số tiền cần thanh toán</div>
    </>
  );
};

export default Cart;
