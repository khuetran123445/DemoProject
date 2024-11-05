import { useNavigate } from "react-router-dom";
import { Formatter } from "./Currency";

const Card = ({
  image,
  title,
  price,
  discount,
}: {
  image: string;
  title: string;
  price: number;
  discount: number;
}) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      {discount > 0 ? (
        <>
          <strong className="me-2">
            <Formatter number={price} />
          </strong>
          <del>
            <Formatter number={discount} />
          </del>
        </>
      ) : (
        <strong>
          <Formatter number={price} />
        </strong>
      )}
    </div>
  );
};

const BodyContent = () => {
  const navigate = useNavigate();
  const handle = () => {
    navigate("/OrderPage");
    console.log("đã gọi tới orderPage");
  };
  return (
    <div className="Item">
      <h2 className=" m-3 grid justify-items-center">
        <img
          src="https://clickbuy.com.vn/uploads/images/flashsale/flash-sale-moi-ngay-large.png"
          alt=""
        />
      </h2>
      <div onClick={handle} className="Card  ">
        <div className="CardItem">
          <Card
            image={
              "https://ecshopvietnam.com/bkin/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367860159.jpg"
            }
            title={"iPhone 16 Pro Max 256GB Chính Hãng VN/A"}
            price={310000}
            discount={420000}
          />
        </div>
        <div className="CardItem">
          <Card
            image={
              "https://ecshopvietnam.com/bkin/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367860159.jpg"
            }
            title={"iPhone 16 Plus max 128GB Chính Hãng VN/A"}
            price={889000}
            discount={1530000}
          />
        </div>
        <div className="CardItem">
          <Card
            image={
              "https://ecshopvietnam.com/bkin/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367860159.jpg"
            }
            title={"iPhone 15 Pro Max 256GB VN/A - Tặng BH rơi vỡ vào nước"}
            price={300000}
            discount={390000}
          />
        </div>
        <div className="CardItem">
          <Card
            image={
              "https://ecshopvietnam.com/bkin/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367860159.jpg"
            }
            title={"Xiaomi 14T Pro 12GB 512GB Chính Hãng - Bảo hành 18 tháng"}
            price={550000}
            discount={690000}
          />
        </div>
        <div className="CardItem">
          <Card
            image={
              "https://ecshopvietnam.com/bkin/cdn/images/202103/goods_img/samsung-galaxy-s21-5g-P4305-1615367860159.jpg"
            }
            title={"iPhone 15 128GB VN/A - Tặng BH rơi vỡ vào nước"}
            price={20690000}
            discount={29990000}
          />
        </div>
      </div>
    </div>
  );
};

export default BodyContent;
