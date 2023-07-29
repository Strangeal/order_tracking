import Top from "../components/nav/Top";
import { useAppDispatch, useAppSelector } from "../helpers/useRedux";
import Orders from "./Orders";
import { Outlet, useParams } from "react-router-dom";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Top />
      <div className="mx-10 mt-[7rem] md:ml-[18rem]">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
