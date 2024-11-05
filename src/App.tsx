import { BrowserRouter } from "react-router-dom";
import RouterCustomer from "./RouterLink/RouterCustomer";
import "./Style.scss";

function App() {
  return (
    <div className="container sm:text-[12px] md:text-[14px] lg:text-[16px] ">
      <BrowserRouter>
        <RouterCustomer />
      </BrowserRouter>
    </div>
  );
}

export default App;
