const Image = ({ image }: { image: string }) => {
  return (
    <div className="ml-[50px] p-2">
      <img src={image} alt="" />
    </div>
  );
};

const CaroselImage = () => {
  return (
    <div>
      <Image image="https://cdn2.cellphones.com.vn/insecure/rs:fill:595:100/q:80/plain/https://dashboard.cellphones.com.vn/storage/cate-mo-ban-ip-16-pro-26-09.jpg" />
      <Image image="https://cdn.hoanghamobile.com/i/home/Uploads/2024/10/11/xiaomi-bts-aaaa.png" />
      <Image image="https://cdn2.cellphones.com.vn/insecure/rs:fill:595:100/q:80/plain/https://dashboard.cellphones.com.vn/storage/cate-mo-ban-ip-16-pro-26-09.jpg" />
      <Image image="https://cdn.hoanghamobile.com/i/home/Uploads/2024/10/11/xiaomi-bts-aaaa.png" />
    </div>
  );
};

export default CaroselImage;
