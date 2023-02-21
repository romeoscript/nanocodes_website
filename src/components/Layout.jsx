import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <section className=" bg-[#030C4B]">
        <Navbar />
        {children}
        <Footer />
      </section>
    </>
  );
};

export default Layout;
