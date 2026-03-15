import React from "react";
import Hero from "../../components/Hero/Hero";
import Books from "../../components/Books/Books";

const Home = () => {
  return (
    <main className="space-y-4">
      {/* Hero */}
      <Hero />

      {/* Books */}
      <Books />
    </main>
  );
};

export default Home;
