import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Sections */}
      <section className="max-w-6xl mx-auto">
        <Outlet />
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Root;
