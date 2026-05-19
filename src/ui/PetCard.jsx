"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";

const PetCard = ({ pet }) => {
  const { _id, PetName, location, breed, age, gender, imageUrl, adoptionFee } =
    pet;

  return (
    <div className="shadow-2xl rounded-xl  border-2">
      <div className=" overflow-hidden rounded-xl ">
        <Image
          className="w-full h-80 md:h-60 object-cover"
          src={imageUrl}
          width={400}
          height={200}
          alt={`${PetName} image`}
        ></Image>
      </div>
      <div className="cardContent space-y-2 border-b-2 p-4 border-gray-50">
        <h4 className="text-2xl font-bold"> {PetName}</h4>
        <p className="text-gray-400">
          {PetName} - age is {age} Years - {gender}
        </p>
        <p className="flex gap-4 items-center">
          <MdLocationOn /> {location}{" "}
        </p>
      </div>
      <div className="flex items-center py-2 justify-around bg-gray-800">
        <Button
          className="rounded-none px-8 py-4 bg-[#c19468]"
          variant="outline"
        >
          <Link href={`/all-pets/${_id}`}>Pet Details</Link>
        </Button>
        <Button className="rounded-none px-8 py-4" variant="danger-soft">
          Adopt Now
        </Button>
      </div>
    </div>
  );
};

export default PetCard;
