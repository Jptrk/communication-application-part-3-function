// Libraries
import Reac from "react";
import styles from "./Dashboard.module.scss";
import { Outlet } from "react-router-dom";
// Components
import Navbar from "../../components/Navbar/Navbar";

function Dashboard() {
  return (
    <div className={styles.main}>
      {/* Navigation bar */}
      <Navbar />
      {/* Child routes */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
