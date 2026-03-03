import React from "react";
import bannerBg from "../../assets/images/bg-shadow.png";

const NewsLetter = () => {
  return (
    <section className="px-4 lg:px-0">
      <div
        className="max-w-7xl mx-auto px-4 lg:px-0 py-20 rounded-3xl bg-white bg-cover bg-center flex items-center justify-center relative -bottom-37.5"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        {/* NewsLetterContent */}
        <div className="text-center">
          <h2 className="text-hover-nav-link text-xl md:text-3xl font-bold pb-4">
            Subscribe to our Newsletter
          </h2>
          <p className="text-nav-link text-xs md:text-lg lg:text-xl font-medium">
            Get the latest updates and news right in your inbox!
          </p>

          {/* Form */}
          <fieldset className="flex items-center justify-center gap-4 mt-6">
            <input
              type="email"
              className="input rounded-xl"
              placeholder="Enter your email"
            />
            <button className="btn bg-linear-to-r from-[#DB7D99] via-[#E3A65F] to-[#E5BE71] hover:scale-110 transition-transform duration-300 rounded-xl font-bold font-sora px-7.5 py-4.5">
              Subscribe
            </button>
          </fieldset>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
