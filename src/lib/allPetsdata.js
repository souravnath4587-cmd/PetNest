export const allPetsData = async () => {
  const res = await fetch("http://localhost:5000/all-pets");
  const pets = await res.json();

  return pets;
};
