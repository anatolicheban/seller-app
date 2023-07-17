import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./index.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Sidebar />
        <div className="view">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
