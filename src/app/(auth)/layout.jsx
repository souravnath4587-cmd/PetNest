import FooterPage from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <FooterPage />
    </>
  );
};

export default AuthLayout;
