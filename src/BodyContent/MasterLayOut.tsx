import { memo } from "react";
import Header from "../theme/header";
import Footerx from "../theme/footer";

const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footerx />
    </div>
  );
};

export default memo(MasterLayout);
