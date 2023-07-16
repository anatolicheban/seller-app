import { Outlet } from "react-router";
import Footer from "./Footer";
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
      <Footer />
    </>
  );
};

export default Layout;
