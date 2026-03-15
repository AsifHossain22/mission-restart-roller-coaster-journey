import React from "react";
import heroImage from "../../assets/books.jpg";

const Hero = () => {
  return (
    <div className="bg-[#13131305] rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 min-h-[85vh] px-5 lg:px-25 py-5 lg:py-20 mx-4 lg:mx-0">
      {/* Content */}
      <div className="text-center lg:text-left">
        <h2 className="text-3xl lg:text-[56px] font-bold mb-6 lg:mb-12">
          Books to freshen up your bookshelf
        </h2>
        <button className="btn px-7 py-4.5 rounded-lg bg-primary-brand hover:bg-transparent border-2 border-primary-brand text-sm lg:text-lg text-base-100 hover:text-primary-brand transition-colors duration-300">
          View The List
        </button>
      </div>

      {/* Image */}
      <div>
        <img className="w-full" src={heroImage} alt="Book Vibe" />
      </div>
    </div>
  );
};

export default Hero;
