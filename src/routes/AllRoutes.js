import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import DashboardAdmin from "../pages/DashboardAdmin";
import DetailBarang from "../pages/DetailBarang";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard-admin" element={<DashboardAdmin />} />
      <Route path="/detail/:id" element={<DetailBarang />} />
    </Routes>
  );
}

export default AllRoutes;
