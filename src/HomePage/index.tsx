import { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Layout } from "antd";
import CateloryItem from "../Catelory/CateloryItem";
import Carosel from "../Catelory/Carosel";
import CaroselImage from "../Catelory/CaroselImg";
import BodyContent from "../BodyContent/BodyContent";

const { Content } = Layout;
const HomePage = () => {
  return (
    <Layout>
      <Layout>
        <Content
          style={{
            borderRadius: 8,
            overflow: "hidden",
            width: "calc(100% - 20px)",
            maxWidth: "calc(100% - 20px)",
          }}
        >
          <div className="flex  ">
            <div>
              <CateloryItem />
            </div>
            <div className="flex ">
              <div className="w-[530px]">
                <Carosel />
              </div>
              <div className="w-[500px]  ">
                <CaroselImage />
              </div>
            </div>
          </div>

          <BodyContent />
        </Content>
      </Layout>
    </Layout>
  );
};

export default memo(HomePage);
