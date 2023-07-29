import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
type Props = {
  orders: any;
  header: any;
  filters: any;
  selectedOrders: any;
  setVisible: (visible: boolean) => void;
};

const TbData = ({
  orders,
  header,
  filters,
  selectedOrders,
  setVisible,
}: Props) => {
  return (
    <DataTable
      value={orders}
      globalFilterFields={[
        "customer_name",
        "product_name",
        "order_number",
        "status",
      ]}
      header={header}
      emptyMessage="No orders found."
      dataKey="order_number"
      rows={10}
      filters={filters}
      tableStyle={{ minWidth: "100%", zIndex: -1 }}
      selection={selectedOrders!}
      // responsiveLayout="scroll"
      onRowClick={() => setVisible(true)}
    >
      <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
      <Column
        field="order_number"
        header="Order"
        className="text-sm font-semibold"
      />
      <Column
        field="customer_name"
        header="Client"
        // body={clientBody}
      />
      <Column
        field="product_name"
        header="Product"
        filterField="orders.product_name"
        className="product_column flex-shrink-0"
      />
      <Column
        field="status"
        header="Status"
        // body={statusBody}
      />
      <Column field="date" header="Date" className="date_column" />
    </DataTable>
  );
};

export default TbData;
