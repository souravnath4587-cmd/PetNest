import AllPetsPage from "@/ui/AllPets";

const page = async () => {
  const res = await fetch("http://localhost:5000/all-pets");
  const pets = await res.json();

  return (
    <>
      <AllPetsPage pets={pets} />
    </>
  );
};

export default page;
