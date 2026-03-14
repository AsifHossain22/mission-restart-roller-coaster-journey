import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Tickets from "./components/Tickets/Tickets";
import Loader from "./components/Loader/Loader";

// LoadTickets
const ticketsData = async () => {
  const res = await fetch("/ticketData.json");
  return res.json();
};

const App = () => {
  // PromiseFromTicketData
  const ticketPromise = ticketsData();

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        {/* Banner */}
        <Banner />

        {/* Tickets */}
        <Suspense fallback={<Loader />}>
          <Tickets ticketPromise={ticketPromise} />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
