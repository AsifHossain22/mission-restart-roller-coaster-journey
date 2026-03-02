import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Players from "./components/Players/Players";
import NewLetter from "./components/Newsletter/Newletter";

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
        <NewLetter />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
