import { allPetsData } from "@/lib/allPetsdata";
import { auth } from "@/lib/auth";
import AdoptionForm from "@/ui/AdoptionForm";
import { headers } from "next/headers";
import Image from "next/image";

const PetDetaisPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);

  const petsData = await allPetsData();

  const res = await fetch(`http://localhost:5000/all-pets/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const petData = await res.json();

  const data = await fetch(`http://localhost:5000/my-request`);
  const adoptPets = await data.json();
  console.log(adoptPets);

  const {
    imageUrl,
    description,
    departureDate,
    adoptionFee,
    vaccination,
    health,
    gender,
    age,
    breed,
    species,
    location,
    PetName,
  } = petData;

  return (
    <div className="container mx-auto mb-10">
      <div className="my-4">
        <h2 className="text-3xl font-bold">About This Pet</h2>
        <p className="text-gray-500">Find Your favorite Pet</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div>
          <Image
            src={imageUrl}
            alt={PetName}
            className="
              w-full
              object-scale-down
              h-[500]
              rounded-2xl
            "
            width={600}
            height={400}
          />
          <div className="flex flex-row justify-between">
            <h1 className="text-4xl font-bold ">{PetName}</h1>
            <h1 className="text-3xl font-bold text-[#d4a574]">
              ${adoptionFee}
            </h1>
          </div>

          <p className="mt-3 text-gray-600">{description}</p>

          <div className="mt-5 flex flex-row gap-8 text-gray-500">
            <div className="space-y-2">
              <p>
                <span className="font-black">Breed: </span>
                {breed}
              </p>
              <p>
                <span className="font-black">Species: </span>
                {species}
              </p>
              <p>
                <span className="font-black">Gender: </span>
                {gender}
              </p>
            </div>
            <div className="space-y-2">
              <p>
                <span className="font-black">Health: </span>
                {health}
              </p>
              <p>
                <span className="font-black">Vaccination: </span>
                {vaccination}
              </p>
              <p>
                <span className="font-black">Location: </span>
                {location}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side  */}
        <AdoptionForm
          id={id}
          petName={PetName}
          adoptPets={adoptPets}
          petsData={petsData}
        />

        {/* </div> */}
      </div>
    </div>
  );
};

export default PetDetaisPage;
