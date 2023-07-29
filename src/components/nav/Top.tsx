"use client";

import "../../styles/nav.css";
import { useState } from "react";
import Side from "./Side";
import { VscBellDot } from "react-icons/vsc";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

import { FaMoon } from "react-icons/fa";
import { HiOutlineSun } from "react-icons/hi";

const Top = () => {
  const [profile, setProfile] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="fixed z-30 top-0 w-full bg-white border-b border-gray-200 md:pl-[15rem] dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-5 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                type="button"
                onClick={() => setMenu((prev) => !prev)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center w-full">
              <div className="flex items-center ml-3 w-full justify-between">
                {/* User profile */}

                <form>
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Mockups, Logos..."
                      required
                    />
                  </div>
                </form>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 border p-1 rounded-xl bg-[#191D31]">
                    <button>
                      <FaMoon className="w-7 h-7 text-white border rounded-lg p-1.5 bg-[#1F2335]" />
                    </button>
                    <button>
                      <HiOutlineSun className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <span className="text-white">|</span>
                  <button>
                    <VscBellDot className="w-6 h-6 text-white" />
                  </button>
                  <div className="flex items-center gap-20">
                    <div className="items-center gap-4 hidden md:flex">
                      <button
                        type="button"
                        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      >
                        <img
                          className="w-7 h-7 rounded-full object-cover object-top"
                          src="/src/assets/react.svg"
                          alt="user photo"
                        />
                      </button>

                      <div>
                        <h5 className="text-sm text-white">Alex Smith</h5>
                        <p className="text-xs text-gray-300">Sales Manager</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setProfile((prev) => !prev)}
                      type="button"
                    >
                      <BsChevronDown className="text-xl text-white" />
                    </button>
                  </div>
                </div>

                <div
                  className={`z-50 ${
                    profile ? "block absolute top-9 right-0" : "hidden"
                  }  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3">
                    <p className="text-sm text-gray-900 dark:text-white">
                      Neil Sims
                    </p>
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1">
                    <li>
                      <Link to="/" className="top_nav_link">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="top_nav_link">
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="top_nav_link">
                        Reporting
                      </Link>
                    </li>
                    <button className="top_nav_link w-full text-left">
                      Sign out
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Side menu={menu} />
    </>
  );
};

export default Top;
