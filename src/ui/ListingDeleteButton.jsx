"use client";
import { Button } from "@heroui/react";
import React from "react";

const ListingDeleteButtonPage = ({ id, setFilterPets }) => {
  const handleDeleted = async (id) => {
    console.log(id);

    const confirmDelete = confirm("Are you sure to delete form listing item.");
    if (!confirmDelete) return;
    const res = await fetch(`http://localhost:5000/all-pets/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);

    if (data.deletedCount > 0) {
      setFilterPets((prev) => prev.filter((pet) => pet._id !== id));
    }
  };
  return (
    <Button
      className="
                    bg-red-500
                    text-white
                    w-full
                    rounded-2xl
                    py-3
                    font-medium
                    hover:bg-red-600
                    transition
                  "
      onClick={() => handleDeleted(id)}
    >
      Delete
    </Button>
  );
};

export default ListingDeleteButtonPage;
