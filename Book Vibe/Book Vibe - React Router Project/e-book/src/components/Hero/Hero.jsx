import React from "react";
import heroImage from "../../assets/books.jpg";

const Hero = () => {
  return (
    <div className="bg-[#13131305] rounded-3xl flex items-center justify-between gap-20 min-h-[85vh] px-25 py-20">
      {/* Content */}
      <div>
        <h2 className="text-[56px] font-bold mb-12">
          Books to freshen up your bookshelf
        </h2>
        <button className="btn px-7 py-4.5 rounded-lg bg-primary-brand hover:bg-transparent border-2 border-primary-brand text-lg text-base-100 hover:text-primary-brand transition-colors duration-300">
          View The List
        </button>
      </div>

      {/* Image */}
      <div>
        <img src={heroImage} alt="Book Vibe" />
      </div>
    </div>
  );
};

export default Hero;
