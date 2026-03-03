import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Players from "./components/Players/Players";
import NewsLetter from "./components/NewsLetter/NewsLetter";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        {/* HeroSection */}
        <Hero />

        {/* Players */}
        <Players />

        {/* Newsletter */}
        <NewsLetter />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
