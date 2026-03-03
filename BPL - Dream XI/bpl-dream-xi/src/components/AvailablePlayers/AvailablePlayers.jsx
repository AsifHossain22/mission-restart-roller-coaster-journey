import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  //   console.log(playersData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
      {playersData.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
};

export default AvailablePlayers;
