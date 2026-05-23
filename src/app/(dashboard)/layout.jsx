import React from "react";

import Link from "next/link";
import { GoChecklist } from "react-icons/go";
import { IoIosListBox } from "react-icons/io";
import { MdOutlineAdd } from "react-icons/md";
import Navbar from "@/components/Navbar";

const DashBoardLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 items-start gap-4">
        <div className="sm:col-span-3 col-span-12 border border-white/5 h-full">
          <div className="my-4 mx-10">
            <h2 className="font-bold border-b-2 space-y-2">Menu</h2>
            <div className="flex flex-row sm:flex-col justify-between">
              <Link
                href={"/my-request"}
                className="flex items-center gap-4 my-2 p-2 hover:bg-[#c19468]"
              >
                <GoChecklist />
                My Request
              </Link>
              <Link
                href={"/add-pet"}
                className="flex items-center gap-4 my-2 p-2 hover:bg-[#c19468]"
              >
                <MdOutlineAdd />
                Add Pet
              </Link>
              <Link
                href={"/my-listing"}
                className="flex items-center gap-4 my-2 p-2 hover:bg-[#c19468]"
              >
                <IoIosListBox />
                My Listing
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-9">{children}</div>
      </div>
    </>
  );
};

export default DashBoardLayout;
