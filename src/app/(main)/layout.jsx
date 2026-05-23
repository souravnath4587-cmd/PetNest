import FooterPage from "@/components/Footer";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <FooterPage />
    </>
  );
};

export default MainLayout;
