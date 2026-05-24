"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdLocationOn } from "react-icons/md";

const PetCard = ({ pet }) => {
  const { _id, PetName, location, age, gender, imageUrl } = pet;
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  const handleAdopt = (id) => {
    if (!user) {
      router.push("/login");
      return;
    } else {
      router.push(`/all-pets/${id}`);
    }
  };

  return (
    <div className="shadow-2xl rounded-t-xl  border-2">
      <div className=" overflow-hidden rounded-xl ">
        <Image
          className=" w-full h-60 object-cover"
          src={imageUrl}
          width={350}
          height={200}
          alt={`${PetName} image`}
        ></Image>
      </div>
      <div className="cardContent space-y-2 border-b-2 p-4 h-40 border-gray-50">
        <h4 className="text-2xl font-bold"> {PetName}</h4>
        <p className="text-gray-400">
          {PetName} - age is {age} Years - {gender}
        </p>
        <p className="flex gap-4 items-center">
          <MdLocationOn /> {location}{" "}
        </p>
      </div>
      <div className="flex items-center gap-6 py-2 justify-around bg-gray-800 p-4">
        <Button className="rounded-none w-full bg-[#c19468]" variant="outline">
          <Link href={`/all-pets/${_id}`}>Pet Details</Link>
        </Button>
        <Button
          className="rounded-none w-full "
          onClick={() => handleAdopt(_id)}
          variant="danger-soft"
        >
          Adopt Now
        </Button>
      </div>
    </div>
  );
};

export default PetCard;
