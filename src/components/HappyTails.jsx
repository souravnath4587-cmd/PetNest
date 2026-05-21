"use client";

import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const HappyTails = () => {
  const stories = [
    {
      id: 1,
      name: "Sophia & Bella",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
      story:
        "Bella was rescued through PetNest and quickly became a beloved part of Sophia’s family. Their bond grows stronger every single day.",
    },

    {
      id: 2,
      name: "Daniel & Max",
      image:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?q=80&w=1200&auto=format&fit=crop",
      story:
        "After adopting Max, Daniel found the perfect adventure partner. From morning walks to weekend trips, they do everything together.",
    },

    {
      id: 3,
      name: "Emma & Coco",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
      story:
        "Coco brought happiness and positive energy into Emma’s home. Their adoption story inspired many others in their community.",
    },
  ];

  return (
    <section
      className="
        py-24
        bg-linear-to-b
        from-white
        via-cyan-50
        to-orange-50
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span
            className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-orange-100
              text-orange-500
              text-sm
              font-semibold
              tracking-widest
              uppercase
            "
          >
            Happy Tails
          </span>

          <h2
            className="
              mt-6
              text-5xl
              md:text-6xl
              font-black
              text-gray-900
              leading-tight
            "
          >
            Real Stories,
            <span className="text-orange-500"> Real Happiness</span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-gray-600
            "
          >
            Discover inspiring adoption journeys from loving families who found
            lifelong friendship through PetNest.
          </p>
        </div>

        {/* Story Cards */}
        <div
          className="
            mt-20
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-10
          "
        >
          {stories.map((item) => (
            <div
              key={item.id}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                bg-white
                shadow-xl
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-500
                group
              "
            >
              {/* Top Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="
                    w-full
                    h-[320]
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
                />

                {/* Gradient Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/50
                    to-transparent
                  "
                />

                {/* Floating Quote */}
                <div
                  className="
                    absolute
                    top-5
                    right-5
                    w-14
                    h-14
                    rounded-full
                    bg-white/90
                    backdrop-blur-md
                    flex
                    items-center
                    justify-center
                    text-orange-500
                    text-xl
                    shadow-lg
                  "
                >
                  <FaQuoteLeft />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Stars */}
                <div className="flex items-center gap-1 text-orange-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                {/* Name */}
                <h3
                  className="
                    mt-5
                    text-3xl
                    font-black
                    text-gray-900
                  "
                >
                  {item.name}
                </h3>

                {/* Story */}
                <p
                  className="
                    mt-5
                    text-gray-600
                    leading-8
                  "
                >
                  {item.story}
                </p>

                {/* Bottom Decoration */}
                <div
                  className="
                    mt-8
                    w-16
                    h-1.5
                    rounded-full
                    bg-linear-to-r
                    from-orange-500
                    to-cyan-400
                  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HappyTails;
