import Side from "../components/nav/Side";
import Top from "../components/nav/Top";
import Orders from "./Orders";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Top />
      <div className="mx-10 mt-[7rem] md:ml-[18rem]">
        <Orders />
      </div>
    </>
  );
};

export default Dashboard;
