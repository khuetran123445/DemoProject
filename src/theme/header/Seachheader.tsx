import { Input, Space } from "antd";

const { Search } = Input;

const onSearch = (value: string) => {
  console.log(value);
};

const Inputheader: React.FC = () => {
  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="Bạn cần tìm gì..."
          onSearch={onSearch}
          style={{ width: 300 }}
        />
      </Space>
    </div>
  );
};

export default Inputheader;
