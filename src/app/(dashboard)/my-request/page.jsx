"use client";
import TablePage from "@/ui/Table";
import { useEffect, useState } from "react";

const page = () => {
  const [adoptPets, setAdoptPets] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-request`)
      .then((res) => res.json())
      .then((data) => setAdoptPets(data));
  }, []);

  const allRequest = adoptPets.length;
  const allPending = adoptPets.filter((pet) => pet.status === "pending").length;
  const allApproved = adoptPets.filter(
    (pet) => pet.status === "approved",
  ).length;
  const allRejected = adoptPets.filter(
    (pet) => pet.status === "rejected",
  ).length;

  return (
    <div className="">
      <div className="mx-8 my-4">
        <h2 className="text-3xl font-bold">All Adoption Request</h2>
        <p className="text-gray-500">
          All adoption request is here. You can see all information.{" "}
        </p>
      </div>
      <div>
        <div className="flex flex-row justify-around items-center">
          <div className="flex items-center py-4 px-6 border-2 border-white/5">
            <h2 className="text-xl font-bold">Total Request : </h2>
            <p className="font-bold text-2xl"> {allRequest}</p>
          </div>
          <div className="flex items-center py-4 px-6 border-2 border-white/5">
            <h2 className="text-xl font-bold">Pending : </h2>
            <p className="font-bold text-2xl"> {allPending} </p>
          </div>
          <div className="flex items-center py-4 px-6 border-2 border-white/5">
            <h2 className="text-xl font-bold">Approved : </h2>
            <p className="font-bold text-2xl"> {allApproved} </p>
          </div>
          <div className="flex items-center py-4 px-6 border-2 border-white/5">
            <h2 className="text-xl font-bold">Rejected : </h2>
            <p className="font-bold text-2xl"> {allRejected} </p>
          </div>
        </div>
      </div>
      <div className="mx-8 my-4">
        <TablePage adoptPets={adoptPets} setAdoptPets={setAdoptPets} />
      </div>
    </div>
  );
};

export default page;
