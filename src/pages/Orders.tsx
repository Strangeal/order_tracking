import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../helpers/useRedux";
import { fetchOrders } from "../redux/orders/orderSlice";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import PopUp from "../components/PopUp";
import TbData from "../components/TbData";

const Orders = () => {
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const { orders } = useAppSelector((state) => state.orders);
  const [selectedOrders, setSelectedOrders] = useState(null);
  const [globalFilterValue, setGlobalFilterValue] = useState<string>("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    // @ts-ignore
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };
  const header = renderHeader();
  return (
    <div className="card">
      <PopUp visible={visible} setVisible={setVisible} />
      <TbData
        orders={orders}
        filters={filters}
        header={header}
        selectedOrders={selectedOrders}
        setVisible={setVisible}
      />
    </div>
  );
};

export default Orders;

{
  /* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <Tbhead />
          <tbody>
            <Tbbody />
          </tbody>
        </table>
      </div> */
}
