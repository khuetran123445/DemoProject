import { memo, useState } from "react";

import { Flex, Layout } from "antd";
// import { useNavigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { Modal } from "react-bootstrap";
import Inputheader from "./Seachheader";
import FormLogin from "./FormLogin";
const { Header } = Layout;
const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#dd0000",
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "calc(100% - 20px)",
  maxWidth: "calc(100% - 20px)",
};

const Headerx = () => {
  const navigate = useNavigate();
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handle = () => {
    navigate("");
    console.log("trang chu");
    window.location.reload();
  };
  const handleLogin = () => {
    setIsLoginVisible(!isLoginVisible); // Toggle the visibility
  };

  return (
    <div>
      <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>
            <div className="flex h-[50px]">
              <div className="image Headerx">
                <img
                  onClick={handle}
                  width={190}
                  height={30}
                  src={
                    "https://clickbuy.com.vn/assets/themes/halloween/logo-hlw.png?v=2"
                  }
                  alt=""
                />
              </div>

              <div className="Content  ">
                <ul>
                  <li className="InputHeader">
                    <Inputheader />
                  </li>
                  <li>Giới thiệu thông tin </li>
                  <li>Sản phẩm đã xem</li>
                  <li>Tra cứu đơn hàng</li>
                  <li onClick={handleLogin}>Đăng nhập</li>
                </ul>
              </div>
            </div>
          </Header>
        </Layout>
      </Flex>

      <Modal show={isLoginVisible} onHide={handleLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Đăng nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormLogin />
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default memo(Headerx);
