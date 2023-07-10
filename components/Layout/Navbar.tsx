import React, { useState, useEffect } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import NavbarItem from "../NavbarItem/NavbarItem";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
      <div className={"w-full bg-black fixed z-50"}>
        <div className={"h-20 flex mx-auto bg-black w-full max-w-[1360px]"}>
          <div className={"hidden w-full lg:flex justify-between"}>
            <Link href={"/"} className={"flex items-center px-[10px]"}>
                  <Image className={"w-12"} src={"/assets/icon.png"}  alt={"Bojan Gagaleski"}/>
            </Link>
            <div className={"flex items-center gap-[10px]"}>
                <NavbarItem to={"/"} name={"home"}/>
                <NavbarItem to={"/timeline"} name={"timeline"}/>
                <NavbarItem to={"/about"} name={"about"}/>
                <NavbarItem to={"/blog"} name={"blog"}/>
            </div>
          </div>
          <div
              className={
                "flex lg:hidden w-4/5 mx-auto justify-between items-center"
              }
          >
            <div className={"flex items-center"}>
              <Image className={"w-12"} src={"/assets/icon.png"}  alt={"Bojan Gagaleski"}/>
            </div>
            {!toggleNavbar ? (
                <div
                    className={"text-4xl h-1/2"}
                    onClick={() => setToggleNavbar(true)}
                >
                  <BiMenu color={"#a5a5a5"} />
                </div>
            ) : (
                <div
                    className={"text-4xl h-1/2"}
                    onClick={() => setToggleNavbar(false)}
                >
                  <BiX color={"#a5a5a5"} />
                </div>
            )}
          </div>
        </div>
        <div
            className={`bg-black py-10 custom-transition duration-300 absolute z-50 w-full ${
                !toggleNavbar
                    ? "invisible opacity-0 max-h-0"
                    : "visible opacity-100 max-h-96"
            }`}
        >
          <div className={"flex flex-col justify-center w-full mx-auto gap-[10px]"}>
              <NavbarItem to={"/"} name={"home"}/>
              <NavbarItem to={"/timeline"} name={"timeline"}/>
              <NavbarItem to={"/about"} name={"about"}/>
              <NavbarItem to={"/blog"} name={"blog"}/>
          </div>
        </div>
      </div>
  );
}


export default Navbar;
