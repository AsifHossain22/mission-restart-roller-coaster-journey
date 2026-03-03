import React from "react";
import playerImg from "../../assets/images/banner-main.png";
import { FaUser } from "react-icons/fa";

const Players = () => {
  return (
    <section className="max-w-7xl mx-auto py-8 px-4 lg:px-0 mt-4">
      {/* SectionTitleAndButton */}
      <div className="flex justify-between items-center">
        <h2 className="font-sora font-bold text-[28px] text-hover-nav-link">
          Available Players
        </h2>
        <div className="join join-vertical lg:join-horizontal">
          <button className="btn join-item bg-btn-primary px-5 py-3.5 text-hover-nav-link border-[#13131310]">
            Available
          </button>
          <button className="btn join-item bg-transparent px-5 py-3.5 text-[#13131360] border-[#13131310]">
            Selected (0)
          </button>
        </div>
      </div>

      {/* DynamicPlayersContainer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
        {/* PlayerCard */}
        <div className="p-6 rounded-2xl border-2 border-[#13131310]">
          {/* PlayerImage */}
          <div className="mb-6">
            <img
              src={playerImg}
              alt="Player Image"
              className="rounded-2xl mx-auto border-2 border-[#13131310] p-4"
            />
          </div>
          {/* PlayerName */}
          <div className="flex items-center gap-4">
            <span>
              <FaUser />
            </span>
            <span>Player Name</span>
          </div>
          {/* PlayerNationalityAndRole */}
          <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
            <span>Country</span>
            <span className="btn">Player Role</span>
          </div>
          {/* PlayerCardFooter */}
          <div className="pt-4">
            <p className="pb-4">Rating</p>
            <div className="flex justify-between items-center">
              <span>Right-Hand-Batsman</span>
              <span>Right-Hand-Batsman</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Price: 10000000</span>
              <span className="btn">Choose Player</span>
            </div>
          </div>
        </div>

        {/* PlayerCard */}
        <div className="p-6 rounded-2xl border-2 border-[#13131310]">
          {/* PlayerImage */}
          <div className="mb-6">
            <img
              src={playerImg}
              alt="Player Image"
              className="rounded-2xl mx-auto border-2 border-[#13131310] p-4"
            />
          </div>
          {/* PlayerName */}
          <div className="flex items-center gap-4">
            <span>
              <FaUser />
            </span>
            <span>Player Name</span>
          </div>
          {/* PlayerNationalityAndRole */}
          <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
            <span>Country</span>
            <span className="btn">Player Role</span>
          </div>
          {/* PlayerCardFooter */}
          <div className="pt-4">
            <p className="pb-4">Rating</p>
            <div className="flex justify-between items-center">
              <span>Right-Hand-Batsman</span>
              <span>Right-Hand-Batsman</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Price: 10000000</span>
              <span className="btn">Choose Player</span>
            </div>
          </div>
        </div>

        {/* PlayerCard */}
        <div className="p-6 rounded-2xl border-2 border-[#13131310]">
          {/* PlayerImage */}
          <div className="mb-6">
            <img
              src={playerImg}
              alt="Player Image"
              className="rounded-2xl mx-auto border-2 border-[#13131310] p-4"
            />
          </div>
          {/* PlayerName */}
          <div className="flex items-center gap-4">
            <span>
              <FaUser />
            </span>
            <span>Player Name</span>
          </div>
          {/* PlayerNationalityAndRole */}
          <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
            <span>Country</span>
            <span className="btn">Player Role</span>
          </div>
          {/* PlayerCardFooter */}
          <div className="pt-4">
            <p className="pb-4">Rating</p>
            <div className="flex justify-between items-center">
              <span>Right-Hand-Batsman</span>
              <span>Right-Hand-Batsman</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Price: 10000000</span>
              <span className="btn">Choose Player</span>
            </div>
          </div>
        </div>

        {/* PlayerCard */}
        <div className="p-6 rounded-2xl border-2 border-[#13131310]">
          {/* PlayerImage */}
          <div className="mb-6">
            <img
              src={playerImg}
              alt="Player Image"
              className="rounded-2xl mx-auto border-2 border-[#13131310] p-4"
            />
          </div>
          {/* PlayerName */}
          <div className="flex items-center gap-4">
            <span>
              <FaUser />
            </span>
            <span>Player Name</span>
          </div>
          {/* PlayerNationalityAndRole */}
          <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
            <span>Country</span>
            <span className="btn">Player Role</span>
          </div>
          {/* PlayerCardFooter */}
          <div className="pt-4">
            <p className="pb-4">Rating</p>
            <div className="flex justify-between items-center">
              <span>Right-Hand-Batsman</span>
              <span>Right-Hand-Batsman</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Price: 10000000</span>
              <span className="btn">Choose Player</span>
            </div>
          </div>
        </div>

        {/* PlayerCard */}
        <div className="p-6 rounded-2xl border-2 border-[#13131310]">
          {/* PlayerImage */}
          <div className="mb-6">
            <img
              src={playerImg}
              alt="Player Image"
              className="rounded-2xl mx-auto border-2 border-[#13131310] p-4"
            />
          </div>
          {/* PlayerName */}
          <div className="flex items-center gap-4">
            <span>
              <FaUser />
            </span>
            <span>Player Name</span>
          </div>
          {/* PlayerNationalityAndRole */}
          <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
            <span>Country</span>
            <span className="btn">Player Role</span>
          </div>
          {/* PlayerCardFooter */}
          <div className="pt-4">
            <p className="pb-4">Rating</p>
            <div className="flex justify-between items-center">
              <span>Right-Hand-Batsman</span>
              <span>Right-Hand-Batsman</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Price: 10000000</span>
              <span className="btn">Choose Player</span>
            </div>
          </div>
        </div>

        {/* PlayerCard */}
        <div className="p-6 rounded-2xl border-2 border-[#13131310]">
          {/* PlayerImage */}
          <div className="mb-6">
            <img
              src={playerImg}
              alt="Player Image"
              className="rounded-2xl mx-auto border-2 border-[#13131310] p-4"
            />
          </div>
          {/* PlayerName */}
          <div className="flex items-center gap-4">
            <span>
              <FaUser />
            </span>
            <span>Player Name</span>
          </div>
          {/* PlayerNationalityAndRole */}
          <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
            <span>Country</span>
            <span className="btn">Player Role</span>
          </div>
          {/* PlayerCardFooter */}
          <div className="pt-4">
            <p className="pb-4">Rating</p>
            <div className="flex justify-between items-center">
              <span>Right-Hand-Batsman</span>
              <span>Right-Hand-Batsman</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Price: 10000000</span>
              <span className="btn">Choose Player</span>
            </div>
          </div>
        </div>

        {/* PlayerCard */}
        <div className="p-6 rounded-2xl border-2 border-[#13131310]">
          {/* PlayerImage */}
          <div className="mb-6">
            <img
              src={playerImg}
              alt="Player Image"
              className="rounded-2xl mx-auto border-2 border-[#13131310] p-4"
            />
          </div>
          {/* PlayerName */}
          <div className="flex items-center gap-4">
            <span>
              <FaUser />
            </span>
            <span>Player Name</span>
          </div>
          {/* PlayerNationalityAndRole */}
          <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
            <span>Country</span>
            <span className="btn">Player Role</span>
          </div>
          {/* PlayerCardFooter */}
          <div className="pt-4">
            <p className="pb-4">Rating</p>
            <div className="flex justify-between items-center">
              <span>Right-Hand-Batsman</span>
              <span>Right-Hand-Batsman</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Price: 10000000</span>
              <span className="btn">Choose Player</span>
            </div>
          </div>
        </div>

        {/* PlayerCard */}
        <div className="p-6 rounded-2xl border-2 border-[#13131310]">
          {/* PlayerImage */}
          <div className="mb-6">
            <img
              src={playerImg}
              alt="Player Image"
              className="rounded-2xl mx-auto border-2 border-[#13131310] p-4"
            />
          </div>
          {/* PlayerName */}
          <div className="flex items-center gap-4">
            <span>
              <FaUser />
            </span>
            <span>Player Name</span>
          </div>
          {/* PlayerNationalityAndRole */}
          <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
            <span>Country</span>
            <span className="btn">Player Role</span>
          </div>
          {/* PlayerCardFooter */}
          <div className="pt-4">
            <p className="pb-4">Rating</p>
            <div className="flex justify-between items-center">
              <span>Right-Hand-Batsman</span>
              <span>Right-Hand-Batsman</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Price: 10000000</span>
              <span className="btn">Choose Player</span>
            </div>
          </div>
        </div>

        {/* PlayerCard */}
        <div className="p-6 rounded-2xl border-2 border-[#13131310]">
          {/* PlayerImage */}
          <div className="mb-6">
            <img
              src={playerImg}
              alt="Player Image"
              className="rounded-2xl mx-auto border-2 border-[#13131310] p-4"
            />
          </div>
          {/* PlayerName */}
          <div className="flex items-center gap-4">
            <span>
              <FaUser />
            </span>
            <span>Player Name</span>
          </div>
          {/* PlayerNationalityAndRole */}
          <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
            <span>Country</span>
            <span className="btn">Player Role</span>
          </div>
          {/* PlayerCardFooter */}
          <div className="pt-4">
            <p className="pb-4">Rating</p>
            <div className="flex justify-between items-center">
              <span>Right-Hand-Batsman</span>
              <span>Right-Hand-Batsman</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Price: 10000000</span>
              <span className="btn">Choose Player</span>
            </div>
          </div>
        </div>

        {/* PlayerCard */}
        <div className="p-6 rounded-2xl border-2 border-[#13131310]">
          {/* PlayerImage */}
          <div className="mb-6">
            <img
              src={playerImg}
              alt="Player Image"
              className="rounded-2xl mx-auto border-2 border-[#13131310] p-4"
            />
          </div>
          {/* PlayerName */}
          <div className="flex items-center gap-4">
            <span>
              <FaUser />
            </span>
            <span>Player Name</span>
          </div>
          {/* PlayerNationalityAndRole */}
          <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
            <span>Country</span>
            <span className="btn">Player Role</span>
          </div>
          {/* PlayerCardFooter */}
          <div className="pt-4">
            <p className="pb-4">Rating</p>
            <div className="flex justify-between items-center">
              <span>Right-Hand-Batsman</span>
              <span>Right-Hand-Batsman</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Price: 10000000</span>
              <span className="btn">Choose Player</span>
            </div>
          </div>
        </div>

        {/* PlayerCard */}
        <div className="p-6 rounded-2xl border-2 border-[#13131310]">
          {/* PlayerImage */}
          <div className="mb-6">
            <img
              src={playerImg}
              alt="Player Image"
              className="rounded-2xl mx-auto border-2 border-[#13131310] p-4"
            />
          </div>
          {/* PlayerName */}
          <div className="flex items-center gap-4">
            <span>
              <FaUser />
            </span>
            <span>Player Name</span>
          </div>
          {/* PlayerNationalityAndRole */}
          <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
            <span>Country</span>
            <span className="btn">Player Role</span>
          </div>
          {/* PlayerCardFooter */}
          <div className="pt-4">
            <p className="pb-4">Rating</p>
            <div className="flex justify-between items-center">
              <span>Right-Hand-Batsman</span>
              <span>Right-Hand-Batsman</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Price: 10000000</span>
              <span className="btn">Choose Player</span>
            </div>
          </div>
        </div>

        {/* PlayerCard */}
        <div className="p-6 rounded-2xl border-2 border-[#13131310]">
          {/* PlayerImage */}
          <div className="mb-6">
            <img
              src={playerImg}
              alt="Player Image"
              className="rounded-2xl mx-auto border-2 border-[#13131310] p-4"
            />
          </div>
          {/* PlayerName */}
          <div className="flex items-center gap-4">
            <span>
              <FaUser />
            </span>
            <span>Player Name</span>
          </div>
          {/* PlayerNationalityAndRole */}
          <div className="flex justify-between items-center border-b-2 border-[#13131310] pb-4">
            <span>Country</span>
            <span className="btn">Player Role</span>
          </div>
          {/* PlayerCardFooter */}
          <div className="pt-4">
            <p className="pb-4">Rating</p>
            <div className="flex justify-between items-center">
              <span>Right-Hand-Batsman</span>
              <span>Right-Hand-Batsman</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Price: 10000000</span>
              <span className="btn">Choose Player</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Players;
