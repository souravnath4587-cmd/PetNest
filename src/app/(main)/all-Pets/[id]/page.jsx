import React from "react";

const PetDetaisPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  return <div>This is pet Details page..</div>;
};

export default PetDetaisPage;
