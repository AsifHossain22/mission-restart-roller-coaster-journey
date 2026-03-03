import React from "react";
import { FaUser } from "react-icons/fa";

const PlayerCard = ({ player }) => {
  return (
    <>
      {/* PlayerCard */}
      <div className="p-6 rounded-2xl border-2 border-[#13131310]">
        {/* PlayerImage */}
        <div className="mb-6">
          <img
            src={player?.player_image}
            alt="Player Image"
            className="rounded-2xl mx-auto w-full h-75 object-top"
          />
        </div>
        {/* PlayerName */}
        <div className="flex items-center gap-4">
          <span>
            <FaUser />
          </span>
          <span>{player?.player_name}</span>
        </div>
        {/* PlayerNationalityAndRole */}
        <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
          <span className="text-xs md:text-sm">{player.country}</span>
          <span className="btn text-xs md:text-sm">{player.playing_role}</span>
        </div>
        {/* PlayerCardFooter */}
        <div className="pt-4">
          <div className="flex justify-between items-center">
            <span className="text-xs md:text-sm">Ranking:</span>
            <span className="text-xs md:text-sm">{player.ranking}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xs md:text-sm">{player.batting_style}</span>
            <span className="text-xs md:text-sm">{player.bowling_style}</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-xs md:text-sm">Price: {player.price}</span>
            <span className="btn text-xs md:text-sm">Choose Player</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerCard;
