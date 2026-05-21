import FeatureCardPage from "@/ui/FeatureCard";

const FeaturePage = async () => {
  const res = await fetch(`http://localhost:5000/feature`);
  const petData = await res.json();

  return (
    <section className="py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h2
          className="
        text-5xl
        font-black
        text-gray-900
      "
        >
          Featured Pets
        </h2>

        <p
          className="
        mt-5
        text-lg
        text-gray-600
        leading-8
      "
        >
          Discover our most lovable pets from different species waiting for a
          safe and caring home.
        </p>
      </div>
      <div
        className="
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-4
    mt-14
    justify-between
    items-center
  "
      >
        {petData.map((pet) => (
          <FeatureCardPage key={pet._id} pet={pet} />
        ))}
      </div>
    </section>
  );
};

export default FeaturePage;
