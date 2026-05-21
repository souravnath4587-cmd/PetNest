"use client";
import { Link } from "@heroui/react";
import Image from "next/image";
import { animated, useSpring } from "@react-spring/web";

const FeatureCardPage = ({ pet }) => {
  const cardAnimation = useSpring({
    from: {
      transform: "translateY(0px)",
    },

    to: async (next) => {
      while (true) {
        await next({
          transform: "translateY(-8px)",
        });

        await next({
          transform: "translateY(0px)",
        });
      }
    },

    config: {
      duration: 2500,
    },
  });
  return (
    <animated.div
      style={cardAnimation}
      className="
        group
        relative
        overflow-hidden
        rounded-[35px]
        bg-white
        shadow-xl
        hover:shadow-2xl
        transition-all
        duration-500
      "
    >
      {/* Top Gradient Blur */}
      <div
        className="
          absolute
          top-0
          left-0
          w-full
          h-40
          bg-linner-to-r
          from-orange-300/30
          to-cyan-300/30
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
        "
      />

      {/* Image */}
      <div className="overflow-hidden relative">
        <Image
          src={pet.imageUrl}
          alt={pet.PetName}
          width={500}
          height={500}
          className="
            h-[320]
            w-full
            object-cover
            group-hover:scale-110
            transition-all
            duration-700
          "
        />

        {/* Species Badge */}
        <div
          className="
            absolute
            top-5
            left-5
            px-4
            py-2
            rounded-full
            bg-white/90
            backdrop-blur-md
            text-sm
            font-semibold
            text-gray-800
            shadow-md
          "
        >
          {pet.species}
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-center justify-between">
          <h3
            className="
              text-3xl
              font-black
              text-gray-900
            "
          >
            {pet.PetName}
          </h3>

          <div
            className="
              text-orange-500
              font-bold
              text-lg
            "
          >
            ${pet.adoptionFee}
          </div>
        </div>

        <p
          className="
            mt-2
            text-gray-500
            font-medium
          "
        >
          {pet.breed} • {pet.location}
        </p>

        <p
          className="
            mt-5
            text-gray-600
            leading-7
          "
        >
          {pet.description.slice(0, 90)}...
        </p>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between">
          {/* Health */}
          <div
            className="
              px-4
              py-2
              rounded-full
              bg-green-100
              text-green-700
              font-semibold
              text-sm
            "
          >
            {pet.health}
          </div>

          {/* Button */}
          <Link
            href={`/all-pets/${pet._id}`}
            className="
              relative
              overflow-hidden
              px-6
              py-3
              rounded-full
              bg-linear-to-r
              from-orange-500
              to-orange-600
              text-white
              font-semibold
              shadow-lg
              hover:scale-105
              transition-all
              duration-300
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </animated.div>
  );
};

export default FeatureCardPage;
