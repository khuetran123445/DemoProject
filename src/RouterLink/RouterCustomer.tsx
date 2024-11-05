import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ROUTERS } from "./RouterLink";

import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import OrderPage from "../BodyContent/OrderPage";
import OrderNow from "../BodyContent/OrderNow";
import BuyToTal from "../Buy/BuyTotal";
import MasterLayOut from "../BodyContent/MasterLayOut";
import ShoppingCart from "../Buy/ShoppingCart";

const queryClient = new QueryClient();
const renderUserRourter = () => {
  const userRouter = [
    {
      path: ROUTERS.Link.HOME,
      Component: <HomePage />,
    },
    {
      path: ROUTERS.LinkOrderPage.OrderPage,
      Component: (
        <QueryClientProvider client={queryClient}>
          <OrderPage />
        </QueryClientProvider>
      ),
    },
    {
      path: ROUTERS.LinkOrderNow.OrderNow,
      Component: (
        <QueryClientProvider client={queryClient}>
          <OrderNow />
        </QueryClientProvider>
      ),
    },
    {
      path: ROUTERS.LinkOrderToTal.OrderToTal,
      Component: (
        <QueryClientProvider client={queryClient}>
          <BuyToTal />
        </QueryClientProvider>
      ),
    },
    {
      path: ROUTERS.LinkShopping.ShoppingCart,
      Component: (
        <QueryClientProvider client={queryClient}>
          <ShoppingCart />
        </QueryClientProvider>
      ),
    },
  ];
  return (
    <MasterLayOut>
      <Routes>
        {userRouter.map((item, key: number) => (
          <Route key={key} path={item.path} element={item.Component} />
        ))}
      </Routes>
    </MasterLayOut>
  );
};

const RouterCustomer = () => {
  return renderUserRourter();
};

export default RouterCustomer;
