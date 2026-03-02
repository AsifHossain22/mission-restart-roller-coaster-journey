import React from "react";
import footerLogo from "../../assets/images/logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#06091A] text-white pt-28 px-4 lg:px-0">
      {/* FooterLogo */}
      <div className="text-center">
        <img src={footerLogo} alt="Footer Logo" className="mx-auto mb-16" />
      </div>

      {/* FooterContent */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div>
          <h6 className="font-sora text-lg font-semibold">About Us</h6>
          <p className="text-[#FFFFFF60] font-sora mt-4 w-9/12">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div className="my-8 lg:my-0">
          <h6 className="font-sora text-lg font-semibold">Quick Links</h6>
          <ul className="footer-links mt-4 space-y-1">
            <li>
              <a
                href="#"
                className="text-[#FFFFFF60] font-sora hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#fixture"
                className="text-[#FFFFFF60] font-sora hover:text-white transition-colors duration-300"
              >
                Fixture
              </a>
            </li>
            <li>
              <a
                href="#teams"
                className="text-[#FFFFFF60] font-sora hover:text-white transition-colors duration-300"
              >
                Teams
              </a>
            </li>
            <li>
              <a
                href="#schedules"
                className="text-[#FFFFFF60] font-sora hover:text-white transition-colors duration-300"
              >
                Schedules
              </a>
            </li>
          </ul>
        </div>
        <form>
          <h6 className="font-sora text-lg font-semibold">Subscribe</h6>
          <p className="mt-4 w-8/12">
            Subscribe to our newsletter for the latest updates.
          </p>
          <fieldset className="w-80 mt-5">
            <div className="join">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered join-item focus:outline-none"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#FFFFFF1A] mt-10 py-6 text-center">
        <p className="text-[#FFFFFF60] font-sora">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white">Dream XI</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
