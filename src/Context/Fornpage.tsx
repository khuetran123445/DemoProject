import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AppContext } from "../Context/Context";
import { useNavigate, useParams } from "react-router-dom";
type FormData = {
  firstName: string;
  address: string;
};

const FormPage = () => {
  const { SetFormData } = useContext(AppContext);
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();
  const { id } = useParams();
  const onSubmit = (data: FormData) => {
    console.log(data);
    SetFormData(data);
    if (id) {
      navigate(`/ShoppingCart/${id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" {...register("firstName", { required: true })} />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input id="address" {...register("address", { required: true })} />
      </div>
      <button type="submit">Thêm vào giỏ hàng</button>
    </form>
  );
};

export default FormPage;
