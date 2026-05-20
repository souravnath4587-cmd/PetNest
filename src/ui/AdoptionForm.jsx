"use client";

import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const AdoptionForm = ({ petName, id, adoptPets, petsData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const alreadyRequest = adoptPets.some((pet) => pet.petId === id);
  const adoptPet = adoptPets.filter((pet) => pet.petId == id)[0];
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const selectedPetData = petsData.find((pet) => pet._id == id);

  const {
    location,
    species,
    breed,
    age,
    gender,
    health,
    vaccination,
    adoptionFee,
    imageUrl,
    departureDate,
    description,
    ownerEmail,
  } = selectedPetData;

  const handleAdopt = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.currentTarget);
      const adoptData = {
        ...Object.fromEntries(formData.entries()),
        status: "pending",
        petId: id,
        requestDate: new Date().toISOString().split("T")[0],
      };
      const myListing = {
        ...adoptData,
        location,
        species,
        breed,
        age,
        gender,
        health,
        vaccination,
        adoptionFee,
        imageUrl,
        departureDate,
        description,
        ownerEmail,
      };

      const myListingRes = await fetch(`http://localhost:5000/my-pets/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(myListing),
      });
      const myListingData = await myListingRes.json().catch(() => null);

      const res = await fetch(`http://localhost:5000/all-pets/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(adoptData),
      });
      const data = await res.json().catch(() => null);

      if (!myListingRes.ok || !res.ok) {
        toast.error("Server error occurred");
        return;
      }
      toast.success("Successfully Done...");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center gap-4">
          <Spinner size="xl" />
        </div>
      ) : alreadyRequest ? (
        <div className="flex justify-center items-center h-[200] p-5 rounded-2xl text-center ">
          <div className=" ">
            <h3 className="text-xl font-bold">Request Submitted 🐾</h3>
            <h4>
              {adoptPet.petName} is{" "}
              <span className="text-red-500">{adoptPet.status}</span>
            </h4>
            <p className="mt-2 text-gray-500">
              Your adoption request has been sent successfully.
            </p>
          </div>
        </div>
      ) : (
        <div
          className="
            border
            rounded-2xl
            p-6
            shadow-lg
            h-fit
          "
        >
          <h2 className="text-3xl font-bold mb-6">Adoption Form</h2>

          <form className="space-y-2" onSubmit={handleAdopt}>
            {/* Pet Name */}
            <div>
              <label className="block mb-2">Pet Name</label>

              <input
                type="text"
                name="petName"
                value={petName || ""}
                readOnly
                className="
                  w-full
                  border
                  p-2
                  rounded-xl
                "
              />
            </div>

            {/* User Name */}
            <div>
              <label className="block mb-2">User Name</label>

              <input
                type="text"
                name="userName"
                value={user?.name}
                readOnly
                className="
                  w-full
                  border
                  p-3
                  rounded-xl
                "
              />
            </div>

            {/* User Email */}
            <div>
              <label className="block mb-2">User Email</label>

              <input
                type="email"
                name="userEmail"
                value={user?.email}
                readOnly
                className="
                  w-full
                  border
                  p-3
                  rounded-xl
                "
              />
            </div>

            {/* Pickup Date */}
            <div>
              <label className="block mb-2">Pickup Date</label>

              <input
                type="date"
                name="pickupDate"
                required
                className="
                  w-full
                  border
                  p-3
                  rounded-xl
                "
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2">Message</label>

              <textarea
                name="message"
                rows="5"
                placeholder="Write why you want to adopt..."
                className="
                  w-full
                  border
                  p-3
                  rounded-xl
                "
              />
            </div>

            <button
              className="
                w-full
                bg-black
                text-white
                py-3
                rounded-xl
              "
            >
              {loading ? "Submitting..." : "Adopt"}
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default AdoptionForm;
