import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Root;
