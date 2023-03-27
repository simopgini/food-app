import Image from "next/image";
import Link from "next/link";
import { Component, useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  HiHome,
  HiOutlineHome,
  HiSearch,
  HiOutlineSearch,
  HiClipboardList,
  HiOutlineClipboardList,
  HiUser,
  HiOutlineUser,
} from "react-icons/hi";
import MobileNavbar from "./MobileNavbar";

const DesktopNavbar = () => {
  const router = useRouter();

//   const [toggle, setToggle] = useState("active")
//       const handleClick = () => {
//       setToggle("deactive")
//   }

  return (
    <nav className="hidden lg:block  bg-white border-gray-200 pt-4 rounded dark:bg-gray-900">
      <div className="px-4 md:px-8 lg:px-16  flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
            <Image src="/favicon.ico" alt="Avocado tribe Logo" width={40} height={40} />
            <span className="pl-4 text-2xl font-bold text-neutral-500">
                Avocado Tribe
            </span>
        </div>

        <div className="hidden w-full lg:block lg:w-auto">
            <ul className="flex gap-8 font-semibold text-lg">

                <li className={router.pathname == "/" ? "active" : "deactive"}>
                    <Link href="/" className="hover:text-green cursor-pointer ">Home</Link>
                </li>
                <li className={router.pathname == "/search" ? "active" : "deactive"}>
                    <Link href="/search" className="hover:text-green cursor-pointer ">Search</Link>
                </li>
                <li className={router.pathname == "/list" ? "active" : "deactive"}>
                    <Link href="/list" className="hover:text-green cursor-pointer ">List</Link>
                </li>
                <li className={router.pathname == "/profile" ? "active" : "deactive"}>
                    <Link href="/profile" className="hover:text-green cursor-pointer ">Profile</Link>
                </li>

                {/* <Link href="/"  className={router.pathname == "/" ? "active" : "deactive"}
                      onClick={handleClick}>
                        <li className="hover:text-green cursor-pointer ">Home</li>

                </Link>
                <Link href="/search"  className={router.pathname == "/search" ? "active" : "deactive"}
                      onClick={handleClick}>
                    <li className="hover:text-green cursor-pointer" >Search</li>
                </Link>
                <Link href="/list"  className={router.pathname == "/list" ? "active" : "deactive"}
                      onClick={handleClick}>
                    <li className="hover:text-green cursor-pointer">List</li>
                </Link>
                <Link href="/profile"  className={router.pathname == "/profile" ? "active" : "deactive"}
                      onClick={handleClick}>
                    <li className="hover:text-green cursor-pointer">Profile</li>
                </Link> */}
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
