"use client";
import ListingDeleteButtonPage from "@/ui/ListingDeleteButton";
import RequestModalPage from "@/ui/RequestModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
  const [filterPets, setFilterPets] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets`)
      .then((res) => res.json())
      .then((data) => setFilterPets(data));
  }, []);

  const totalListings = filterPets.length;
  const availablePets = filterPets.filter((pet) => !pet.status).length;
  const adoptedPets = filterPets.filter(
    (pet) => pet.status === "approved",
  ).length;

  // const handleDeleted = (id) => {};

  return (
    <div>
      <div className="space-y-8">
        {/* Heading */}
        <div className="my-4">
          <h2 className="text-3xl font-bold">My Listings</h2>
          <p className="text-gray-500">
            Manage all your pets listings from here.{" "}
          </p>
        </div>

        {/* Stats */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
        "
        >
          {/* Total */}
          <div
            className="
            rounded-3xl
            p-6
            shadow-sm
            border
          "
          >
            <h2 className="text-gray-500">Total Listings</h2>

            <p className="text-4xl font-bold mt-3">{totalListings}</p>
          </div>

          {/* Available */}
          <div
            className="
            rounded-3xl
            p-6
            shadow-sm
            border
          "
          >
            <h2 className="text-gray-500">Available</h2>

            <p
              className="
              text-4xl
              font-bold
              mt-3
              text-green-600
            "
            >
              {availablePets}
            </p>
          </div>

          {/* Adopted */}
          <div
            className="
            rounded-3xl
            p-6
            shadow-sm
            border
          "
          >
            <h2 className="text-gray-500">Adopted</h2>

            <p
              className="
              text-4xl
              font-bold
              mt-3
              text-orange-500
            "
            >
              {adoptedPets}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
        >
          {filterPets.map((pet) => (
            <div
              key={pet._id}
              className="
              
              rounded-3xl
              overflow-hidden
              border
              shadow-sm
              hover:shadow-xl
              transition
              duration-300
            "
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={pet.imageUrl}
                  alt={pet.PetName}
                  // width={400}
                  // height={400}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Name */}
                <div
                  className="
                  flex
                  items-center
                  justify-between
                "
                >
                  <h2
                    className="
                    text-2xl
                    font-bold
                  "
                  >
                    {pet.PetName}
                  </h2>

                  <span
                    className="
                    bg-orange-100
                    text-orange-600
                    text-sm
                    px-3
                    py-1
                    rounded-full
                  "
                  >
                    {pet.status || "available"}
                  </span>
                </div>

                {/* Price */}
                <p
                  className="
                  text-3xl
                  font-bold
                  mt-4
                "
                >
                  ${pet.adoptionFee}
                </p>

                {/* Breed */}
                <p
                  className="
                  text-gray-500
                  mt-2
                "
                >
                  {pet.breed} • {pet.species}
                </p>

                {/* Buttons */}
                <div
                  className="
                  grid
                  grid-cols-2
                  gap-3
                  mt-6
                "
                >
                  {/* Requests */}
                  <RequestModalPage
                    id={pet._id}
                    petName={pet.PetName}
                    petId={pet.petId}
                    userName={pet.userName}
                    userEmail={pet.userEmail}
                    pickupDate={pet.pickupDate}
                    requestDate={pet.requestDate}
                    status={pet.status}
                    message={pet.message}
                  />

                  {/* Edit */}
                  <Link href={`/my-listing/${pet._id}`}>
                    <Button
                      className="
                      w-full
                      border
                      rounded-2xl
                      py-3
                      font-medium
                      hover:bg-gray-100
                      transition
                    "
                    >
                      Edit
                    </Button>
                  </Link>

                  {/* View */}
                  <Button
                    className="
                      w-full
                      bg-orange-500
                      text-white
                      rounded-2xl
                      py-3
                      font-medium
                      hover:bg-orange-600
                      transition
                    "
                  >
                    <Link href={`/all-pets/${pet._id}`}>View</Link>
                  </Button>

                  {/* Delete */}
                  <ListingDeleteButtonPage
                    id={pet._id}
                    setFilterPets={setFilterPets}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
