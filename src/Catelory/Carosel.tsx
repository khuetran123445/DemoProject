import { Carousel } from "react-bootstrap";

const Carosel = () => {
  return (
    <div>
      <Carousel data-bs-theme="white" indicators={false}>
        <Carousel.Item>
          <img
            className=" d-block w-100 border-4 rounded-[20px]  "
            src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="  d-block w-100 border-4 rounded-[20px] "
            src="https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="  d-block w-100 border-4 rounded-[20px] "
            src="https://images.pexels.com/photos/968639/pexels-photo-968639.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carosel;
