import FooterPage from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

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
