import { IoMdPhonePortrait } from "react-icons/io";
import { SiSamsung } from "react-icons/si";

import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <IoMdPhonePortrait />,
    label: "Điện thoại",
    children: [
      { key: 11, label: "Chọn theo hãng" },
      { key: 12, label: "Điện thoại hot" },
    ],
  },
  { key: "2", icon: <IoMdPhonePortrait />, label: "IPhone" },
  { key: "3", icon: <SiSamsung />, label: "Samsung" },
];

const CateloryItem = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div style={{ width: 200 }}>
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{ marginBottom: 3 }}
        >
          {collapsed ? <IoMdPhonePortrait /> : <IoMdPhonePortrait />}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    </>
  );
};

export default CateloryItem;
