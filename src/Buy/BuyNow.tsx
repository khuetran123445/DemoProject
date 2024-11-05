import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router-dom";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "320px",
  height: "110px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: "10px",
};
type TProduct = {
  id: number;
};
const BuyNow = () => {
  const [open, setOpen] = React.useState(false);
  const { id } = useParams();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate();
  const handle = (id: number) => {
    navigate(`/BuyTotal/${id}`);
  };
  const handlenow = () => {
    handleClose();
  };

  const [product, setProduct] = React.useState<TProduct | null>(null);
  React.useEffect(() => {
    // lấy giữ liệu từ localstogare lên để hiển thị theo địa chỉ ID
    const getProduct = localStorage.getItem("products");
    if (getProduct) {
      const products: TProduct[] = JSON.parse(getProduct);
      const selectedProduct = products.find((p) => p.id === parseInt(id!, 10));
      setProduct(selectedProduct || null);
    }
  }, [id]);
  return (
    <div>
      <Button onClick={handleOpen} style={{ color: "white" }}>
        ĐẶT MUA NGAY <br /> Giao hàng toàn quốc
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              className="Text flex gap-4 py-2"
            >
              Thêm vào giỏ hàng thành công
              <div onClick={() => handlenow()}>
                <DisabledByDefaultIcon style={{ cursor: "pointer" }} />
              </div>
            </Typography>
            <Typography
              id="transition-modal-title"
              className="flex gap-3 cursor-pointer "
            >
              <Button
                variant="contained"
                color="success"
                onClick={() => product && handle(product.id)}
              >
                ĐẶT MUA NGAY
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => handlenow()}
              >
                MUA TIẾP
              </Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BuyNow;
