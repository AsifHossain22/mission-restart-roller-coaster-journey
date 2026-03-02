import React from "react";
import bannerBg from "../../assets/images/bg-shadow.png";
import bannerImage from "../../assets/images/banner-main.png";

const Hero = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-4 lg:px-0 py-16 rounded-3xl text-white bg-hover-nav-link bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        {/* BannerImage */}
        <div>
          <img src={bannerImage} alt="Banner Image" />
        </div>
        {/* BannerContent */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="text-center my-4 text-2xl font-medium">
            Beyond Boundaries Beyond Limits
          </p>
          <div className="inline-block border-2 border-btn-primary hover:border-[#E5BE71] rounded-2xl transition-colors duration-300">
            <button className="px-5 py-3.5 m-2  bg-btn-primary text-hover-nav-link font-bold bg-linear-to-r hover:from-[#DB7D99] hover:via-[#E3A65F] hover:to-[#E5BE71] rounded-xl transition-colors duration-300 cursor-pointer">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
