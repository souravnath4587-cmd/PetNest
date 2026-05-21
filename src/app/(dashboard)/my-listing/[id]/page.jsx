import FormForUpdatePage from "@/ui/FormForUpdate";

const page = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/all-pets/${id}`);
  const petData = await res.json();

  return (
    <div>
      {/* Heading */}
      <div className="my-4">
        <h2 className="text-3xl font-bold">Update Data</h2>
        <p className="text-gray-500">
          Manage your pet data updated from here.{" "}
        </p>
      </div>
      <FormForUpdatePage petData={petData} />
    </div>
  );
};

export default page;
