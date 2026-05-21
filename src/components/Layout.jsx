import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Topbar from "./Topbar";
import SocialSidebar from "./SocialSidebar";
import WhatsAppFloat from "./WhatsAppFloat";



const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Topbar />
      <Navbar />
      <SocialSidebar />
      <WhatsAppFloat />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
