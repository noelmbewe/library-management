import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components/common";

const AdminDashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
      <AreaCards />
      <AreaCharts />
      <AreaTable />
    </div>
  );
};

export default AdminDashboard;
