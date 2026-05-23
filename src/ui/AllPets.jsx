"use client";

import { FaSearch } from "react-icons/fa";
import SortByType from "./SortByType";
import PetCard from "./PetCard";
import { useEffect, useState } from "react";

const AllPetsPage = ({ pets }) => {
  const [filterPets, setFilterPets] = useState([]);

  useEffect(() => {
    setFilterPets(pets);
  }, [pets]);

  const handleSearch = async (value) => {
    console.log(value);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets?search=${value}`,
    );
    const data = await res.json();
    setFilterPets(data);
  };

  const handleSortBySpecies = async (value) => {
    console.log(value);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets?sortBySpecies=${value}`,
    );
    const data = await res.json();
    setFilterPets(data);
  };

  return (
    <div className="container mx-auto ">
      <div className="flex flex-row justify-between items-center my-6">
        <div className="my-4">
          <h2 className="text-3xl font-bold">Browse All Pets</h2>
          <p className="text-gray-500">Find Your favorite Pet</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="shadow-xl p-4 relative">
            <h3 className="font-bold">Search Here : </h3>
            <input
              type="text"
              placeholder="Search pets by name"
              className="
                w-full
                bg-transparent
                px-4
                py-2
                mr-4
                text-gray-500
                placeholder:text-gray-400
                border
                border-gray-200
                outline-none
              "
              onChange={(e) => handleSearch(e.target.value)}
            />

            <FaSearch
              size={25}
              className="absolute top-13 right-6 text-gray-500"
            />
          </div>
          <div className="shadow-xl p-4">
            <h3 className="font-bold">Sort By Species : </h3>
            <SortByType handleSortBySpecies={handleSortBySpecies} />
          </div>
        </div>
      </div>
      <div className="grid  md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {filterPets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default AllPetsPage;
