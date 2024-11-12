import { memo } from "react";
import Header from "../theme/header";
import Footerx from "../theme/footer";

const MasterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="py-2">
        <Header />
      </div>
      {children}
      <div className="py-2">
        <Footerx />
      </div>
    </>
  );
};

export default memo(MasterLayout);
