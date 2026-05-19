"use client";

import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const AdoptionForm = ({ PetName, id, adoptPets }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const alreadyRequest = adoptPets.some((pet) => pet.petId === id);
  const adoptPet = adoptPets.filter((pet) => pet.petId == id)[0];
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleAdopt = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const adoptData = {
      ...Object.fromEntries(formData.entries()),
      status: "pending",
      petId: id,
      requestDate: new Date().toISOString().split("T")[0],
    };
    const res = await fetch(`http://localhost:5000/all-pets/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adoptData),
    });
    if (!res) {
      toast.error("This server is not working");
    } else {
      toast.success("Successfully Done...");
      router.refresh();
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
                value={PetName || ""}
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
