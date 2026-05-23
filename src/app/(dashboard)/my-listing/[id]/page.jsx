import { auth } from "@/lib/auth";
import FormForUpdatePage from "@/ui/FormForUpdate";
import { headers } from "next/headers";

const page = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const petData = await res.json();
  console.log(petData);

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
