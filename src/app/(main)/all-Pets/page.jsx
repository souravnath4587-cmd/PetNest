import PetCard from "@/ui/PetCard";

const AllPetsPage = async () => {
  const res = await fetch("http://localhost:5000/all-pets");
  const pets = await res.json();
  console.log(pets);

  return (
    <div className="container mx-auto p-10 md:p-0">
      <div className="flex flex-row justify-between items-center">
        <div className="my-4">
          <h2 className="text-3xl font-bold">Browse All Pets</h2>
          <p className="text-gray-500">Find Your favorite Pet</p>
        </div>
        <div>search , sort , extra</div>
      </div>
      <div className="grid  md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
        {pets.map((pet) => (
          <PetCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default AllPetsPage;
