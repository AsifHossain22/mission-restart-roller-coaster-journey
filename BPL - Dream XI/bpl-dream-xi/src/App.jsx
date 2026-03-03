import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Players from "./components/Players/Players";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Loader from "./components/Loader/Loader";

// LoadPlayersData
const playersData = async () => {
  const res = await fetch("/playersData.json");
  return res.json();
};

function App() {
  const playersPromise = playersData();

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        {/* HeroSection */}
        <Hero />

        {/* Players */}
        <Suspense fallback={<Loader />}>
          <Players playersPromise={playersPromise} />
        </Suspense>

        {/* AvailablePlayers */}
        {/* <Suspense fallback={<Loader />}>
          <AvailablePlayers playersPromise={playersPromise} />
        </Suspense> */}

        {/* Newsletter */}
        <NewsLetter />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
