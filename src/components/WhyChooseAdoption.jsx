"use client";

import { FaHeart, FaHome, FaPaw, FaShieldAlt } from "react-icons/fa";

const WhyChooseAdoption = () => {
  const features = [
    {
      id: 1,
      icon: <FaHeart />,
      title: "Adoption Changes Lives",
      description:
        "Every adoption gives a homeless pet a second chance to experience love, care, and happiness.",
    },

    {
      id: 2,
      icon: <FaHome />,
      title: "Find Love Through Adoption",
      description:
        "Pets bring comfort, loyalty, and joy into families while creating unforgettable emotional bonds.",
    },

    {
      id: 3,
      icon: <FaPaw />,
      title: "Give Pets A Second Chance",
      description:
        "Many rescued animals are waiting for a safe forever home filled with kindness and affection.",
    },

    {
      id: 4,
      icon: <FaShieldAlt />,
      title: "Why PetNest Matters",
      description:
        "PetNest connects caring adopters with healthy and lovable pets through a trusted adoption platform.",
    },
  ];

  return (
    <section
      className="
        py-24
        bg-linear-to-b
        from-white
        via-orange-50
        to-cyan-50
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p
            className="
              uppercase
              tracking-[6px]
              text-orange-500
              font-semibold
            "
          >
            Why Choose Adoption
          </p>

          <h2
            className="
              mt-4
              text-5xl
              md:text-6xl
              font-black
              text-gray-900
              leading-tight
            "
          >
            Open Your Heart To A
            <span className="text-orange-500"> New Best Friend</span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-gray-600
            "
          >
            Adopting a pet means giving love, building companionship, and
            creating a forever family for animals who truly need care and
            affection.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-20
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          {features.map((feature) => (
            <div
              key={feature.id}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                bg-white/80
                backdrop-blur-xl
                p-8
                shadow-lg
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                duration-500
                border
                border-orange-100
              "
            >
              {/* Gradient Glow */}
              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-40
                  h-40
                  bg-orange-300/20
                  blur-3xl
                  rounded-full
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                "
              />

              {/* Icon */}
              <div
                className="
                  relative
                  z-10
                  w-20
                  h-20
                  rounded-3xl
                  bg-linear-to-br
                  from-orange-400
                  to-orange-500
                  text-white
                  text-3xl
                  flex
                  items-center
                  justify-center
                  shadow-xl
                  group-hover:scale-110
                  transition-all
                  duration-500
                "
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  relative
                  z-10
                  mt-8
                  text-2xl
                  font-black
                  text-gray-900
                  leading-snug
                "
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="
                  relative
                  z-10
                  mt-5
                  text-gray-600
                  leading-8
                "
              >
                {feature.description}
              </p>

              {/* Bottom Line */}
              <div
                className="
                  relative
                  z-10
                  mt-8
                  h-1
                  w-16
                  rounded-full
                  bg-linear-to-r
                  from-orange-400
                  to-cyan-400
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAdoption;
