import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <main className="max-w-6xl mx-auto">
      {/* Header */}
      <Header />

      {/* Main */}
      <Outlet />

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Root;
