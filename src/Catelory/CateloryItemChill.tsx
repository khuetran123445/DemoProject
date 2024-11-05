import { Link } from "react-router-dom";

type TChild = {
  id: number;
  name: string;
};

const CateloryItemChill = ({ child }: { child: TChild[] }) => {
  return (
    <div className="cat_child absolute  ">
      {child.length > 0 &&
        child.map((c) => {
          return (
            <Link key={c.id} to={`category/${c.id}`}>
              {c.name}
            </Link>
          );
        })}
    </div>
  );
};

export default CateloryItemChill;
