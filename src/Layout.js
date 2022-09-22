import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./components/Header";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
