import Top from "../components/nav/Top";
import { useAppDispatch, useAppSelector } from "../helpers/useRedux";
import Orders from "./Orders";
import { Outlet, useParams } from "react-router-dom";

type Props = {};

const Dashboard = (props: Props) => {
  const { order } = useAppSelector((state) => state.orderId);
  const dispatch = useAppDispatch();
  console.log(order);
  // console.log(id);

  // useEffect(() => {
  //   if (order.id) {
  //     dispatch(fetchOrdersById({ orderId: 1 }));
  //   }
  // }, [dispatch, order.id]);
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
