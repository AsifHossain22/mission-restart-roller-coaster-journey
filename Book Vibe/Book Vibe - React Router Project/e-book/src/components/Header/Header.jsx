import React from "react";

const Header = () => {
  const navLinks = (
    <>
      <li className="m-2">
        <a
          href=""
          className="btn text-lg text-primary-brand hover:text-base-100 bg-transparent hover:bg-primary-brand transition-colors duration-300 border-2 border-primary-brand px-5 py-3.5 rounded-lg"
        >
          Home
        </a>
      </li>
      <li className="m-2">
        <a
          href=""
          className="btn text-lg text-primary-brand hover:text-base-100 bg-transparent hover:bg-primary-brand transition-colors duration-300 border-2 border-primary-brand px-5 py-3.5 rounded-lg"
        >
          Listed Books
        </a>
      </li>
      <li className="m-2">
        <a
          href=""
          className="btn text-lg text-primary-brand hover:text-base-100 bg-transparent hover:bg-primary-brand transition-colors duration-300 border-2 border-primary-brand px-5 py-3.5 rounded-lg"
        >
          Page to Read
        </a>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-slate-900/70">
      <div className="navbar lg:p-0 lg:py-4 max-w-6xl mx-auto">
        <div className="navbar-start">
          {/* Logo */}
          <a className="btn text-[28px] font-bold bg-transparent shadow-none border-none hover:scale-110 transition-transform duration-300 lg:p-0">
            Book Vibe
          </a>
        </div>
        {/* NavLinks */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* MobileMenu */}
        <div className="dropdown navbar-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden top-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 top-0 mt-15 w-52 p-2 shadow"
          >
            {navLinks}

            {/* Buttons */}
            <div className="navbar-end lg:hidden gap-4 flex-col w-full px-2 lg:px-0 mt-2 lg:mt-0 pb-2 lg:pb-0">
              <a className="btn w-full px-7 py-4.5 rounded-lg bg-primary-brand hover:bg-transparent border-2 border-primary-brand text-lg text-base-100 hover:text-primary-brand transition-colors duration-300">
                Sign In
              </a>
              <a className="btn w-full px-7 py-4.5 rounded-lg bg-secondary-brand hover:bg-transparent border-2 border-secondary-brand text-lg text-base-100 hover:text-secondary-brand transition-colors duration-300">
                Sign Up
              </a>
            </div>
          </ul>

          {/* Buttons */}
          <div className="navbar-end hidden lg:flex gap-4">
            <a className="btn px-7 py-4.5 rounded-lg bg-primary-brand hover:bg-transparent border-2 border-primary-brand text-lg text-base-100 hover:text-primary-brand transition-colors duration-300">
              Sign In
            </a>
            <a className="btn px-7 py-4.5 rounded-lg bg-secondary-brand hover:bg-transparent border-2 border-secondary-brand text-lg text-base-100 hover:text-secondary-brand transition-colors duration-300">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
