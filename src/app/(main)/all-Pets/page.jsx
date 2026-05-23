import AllPetsPage from "@/ui/AllPets";
import PetCard from "@/ui/PetCard";
import SortByType from "@/ui/SortByType";
import { FaSearch } from "react-icons/fa";

const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets/`);
  const pets = await res.json();

  return <AllPetsPage pets={pets} />;
};

export default page;
