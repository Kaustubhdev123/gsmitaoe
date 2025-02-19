import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Tooltip } from "@chakra-ui/react";

import ThemeChanger from "./Toggler";
import { useRouter } from "next/router";
function MyLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
}

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();
  const [isWobRoute, setIsWobRoute] = useState(false);

  useEffect(() => {
    if (router.asPath.startsWith("/wob")) {
      setIsWobRoute(true); // set it as true if you want to launch the website
    } else {
      setIsWobRoute(false);
    }
  }, [router.asPath]);

  const handleClick = () => {
    setActive(!active);
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {isWobRoute ? (
        <nav className="flex items-center justify-between transition-colors flex-wrap bg-white drop-shadow-xl p-1 mb-10 dark:bg-black dark:text-white dark:transition-colors sticky top-0 z-10">
          <div className="flex items-center p-1.5 ml-5">
            <Link href="/wob">
              <a className="inline-flex items-center">
                <span className="text-xl font-bold uppercase tracking-wide">
                  {theme === "light" ? (
                    <img
                      style={{ width: "200px", height: "60px" }}
                      id="Learn_more"
                      src="/WoB/WOB_Black.png"
                      alt="GSSoC logo light"
                    />
                  ) : (
                    <img
                      style={{ width: "200px" }}
                      id="Learn_more"
                      src="/WoB/WOB_White.png"
                      alt="GSSoC logo dark"
                    />
                  )}
                </span>
              </a>
            </Link>
          </div>
          <button
            className="inline-flex p-2.5 hover:bg-[#00008B] rounded lg:hidden text-grey-700 dark:text-white"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              active ? " " : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto text-center`}
          >
            <div className="flex flex-col lg:flex-row lg:ml-auto lg:w-auto items-center mr-6">
              <Link href="/wob#about-wob">
                <a
                  onClick={handleClick}
                  className="lg:inline-flex lg:w-auto w-full px-2 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob"
                >
                  ABOUT
                </a>
              </Link>
              {/* <Link href="/">
                <a
                  onClick={handleClick}
                  className="lg:inline-flex lg:w-auto w-full px-2 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob"
                >
                  GSSoC
                </a>
              </Link> */}
              {/* <Link href="/wobProject">
                <a
                  onClick={handleClick}
                  className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob"
                >
                  PROJECT
                </a>
              </Link> */}
              {/* <Link href="/wobLeaderboard">
                <a
                  onClick={handleClick}
                  className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob"
                >
                  LEADERBOARD
                </a>
              </Link>
              <Link href="/wobTeam">
                <a
                  onClick={handleClick}
                  className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob"
                >
                  TEAM
                </a>
              </Link>
              <a className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob cursor-pointer">
                JOB FAIR
              </a>
              <a className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob cursor-pointer">
                FAQ
              </a>
              <a
                onClick={handleClick}
                className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob cursor-pointer"
              >
                BLOG
              </a>
              <a
                onClick={handleClick}
                href="/wobContact"
                className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-[#00008B] dark:hover:text-[#00008B] hover:text-lg transition-all link link-underline link-underline-black-wob cursor-pointer"
              >
                CONTACT
              </a> */}
              <div className="hidden lg:block">
                <Tooltip label="Change Theme" placement="bottom">
                  <div>
                    <ThemeChanger isTrue={isWobRoute} />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="flex items-center justify-between transition-colors flex-wrap bg-white drop-shadow-xl p-1 mb-10 dark:bg-black dark:text-white dark:transition-colors sticky top-0 z-10">
          <div className="flex items-center p-1.5 ml-5">
            <Link href="/">
              <a className="inline-flex items-center">
                <span className="text-xl font-bold uppercase tracking-wide">
                  {theme === "light" ? (
                    <img
                      style={{ width: "40px" }}
                      id="Learn_more"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxcbYrb0vKQY0BI3eTpUtlFH8xqmmnJo4Lmg&s"
                      alt="GS logo light"
                    />
                  ) : (
                    <img
                      style={{ width: "40px" }}
                      id="Learn_more"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxcbYrb0vKQY0BI3eTpUtlFH8xqmmnJo4Lmg&s"
                      alt="GS logo dark"
                    />
                  )}
                </span>
              </a>
            </Link>
          </div>
          <button
            className="inline-flex p-2.5 hover:bg-orange-600 rounded lg:hidden text-grey-700 dark:text-white"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div
            className={`${
              active ? " " : "hidden"
            }   w-full lg:inline-flex lg:flex-grow lg:w-auto text-center`}
          >
            <div className="flex flex-col lg:flex-row lg:ml-auto lg:w-auto items-center mr-6">
              <Link href="/">
                <a
                  onClick={handleClick}
                  className="lg:inline-flex lg:w-auto w-full px-2 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
                >
                  ABOUT
                </a>
              </Link>
              {/* <Link href="/wob">
                <a
                  onClick={handleClick}
                  className="lg:inline-flex lg:w-auto w-full px-2 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
                >
                  WOB
                </a>
              </Link> */}
              {/* <Link href="/project">
                <a
                  onClick={handleClick}
                  className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
                >
                  PROJECT
                </a>
              </Link> */}
               <Link href="/Datathon2024">
                <a
                  onClick={handleClick}
                  className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
                >
                  Datathon2024
                </a>
              </Link>
            
              {/* <Link href="/leaderboard">
                <a
                  onClick={handleClick}
                  className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
                >
                  LEADERBOARD
                </a>
              </Link> */}
              {/* <Link href="/jobfair">
                <a className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                  JOB FAIR
                </a>
              </Link> */}
              {/* <Link href="/faq">
                <a className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black">
                  FAQ
                </a>
              </Link> */}
              {/* <Link href="/team">
                <a
                  onClick={handleClick}
                  className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
                >
                  TEAM
                </a>
              </Link> */}
              {/* <Link href="/blog">
                <a
                  onClick={handleClick}
                  className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
                >
                  BLOG
                </a>
              </Link> */}
              {/* <a
                onClick={handleClick}
                href="/contact"
                className="lg:inline-flex lg:w-auto w-full px-2.5 py-2 text-center rounded text-grey-700 text-1xl font-medium mr-2.5 hover:text-primary_orange-0 dark:hover:text-primary_orange-0 hover:text-lg transition-all link link-underline link-underline-black"
              >
                CONTACT
              </a> */}
         
              <div className="hidden lg:block">
                <Tooltip label="Change Theme" placement="bottom">
                  <div>
                    <ThemeChanger />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
