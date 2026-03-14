import React, { use } from "react";

const Tickets = ({ ticketPromise }) => {
  const ticketData = use(ticketPromise);
  // console.log(ticketData);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-0 pb-20">
      <div className="grid grid-cols-2 gap-8">
        {/* TicketsContainer */}
        <div className="">
          <h2 className="text-[#34485A] text-2xl font-semibold pb-4">
            Customer Tickets
          </h2>

          {/* TicketContainer */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {ticketData.map((ticket) => (
              <p key={ticket?.id} ticket={ticket}>
                {ticket?.title}
              </p>
            ))}
          </div>
        </div>

        {/* TaskStatusContainer */}
        <div className=""></div>
      </div>
    </section>
  );
};

export default Tickets;
