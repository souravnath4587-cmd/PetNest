export const allPetsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-pets`);
  const pets = await res.json();

  return pets;
};
