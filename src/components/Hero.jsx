"use client";

import Image from "next/image";
import Link from "next/link";
import { animated, useSpring } from "@react-spring/web";

const BannerPage = () => {
  // Image Animation
  const imageAnimation = useSpring({
    from: {
      transform: "translateY(0px)",
    },

    to: async (next) => {
      while (true) {
        await next({
          transform: "translateY(-20px)",
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

  // Button Animation
  const buttonAnimation = useSpring({
    from: {
      scale: 1,
    },

    to: async (next) => {
      while (true) {
        await next({
          scale: 1.05,
        });

        await next({
          scale: 1,
        });
      }
    },

    config: {
      duration: 1200,
    },
  });

  return (
    <section
      className="
        min-h-screen
        bg-gradient-to-r
        from-orange-100
        via-white
        to-cyan-100
        flex
        items-center
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-20
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* Left Content */}
        <div>
          <p
            className="
              text-orange-500
              font-semibold
              mb-4
              tracking-widest
              uppercase
            "
          >
            Find Your Perfect Companion
          </p>

          <h1
            className="
              text-5xl
              md:text-7xl
              font-black
              leading-tight
              text-gray-900
            "
          >
            Give Pets A<span className="text-orange-500"> Loving Home</span>
          </h1>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-gray-600
              max-w-xl
            "
          >
            PetNest connects loving families with adorable pets looking for safe
            and caring homes. Start your adoption journey today and make a new
            best friend.
          </p>

          {/* Animated Button */}
          <animated.div style={buttonAnimation} className="inline-block mt-10">
            <Link
              href="/all-pets"
              className="
                px-8
                py-4
                rounded-full
                bg-orange-500
                hover:bg-orange-600
                text-white
                font-semibold
                text-lg
                shadow-2xl
                transition-all
                duration-300
              "
            >
              Adopt Now
            </Link>
          </animated.div>
        </div>

        {/* Right Image */}
        <animated.div
          style={imageAnimation}
          className="relative flex justify-center"
        >
          {/* Background Blur */}
          <div
            className="
              absolute
              w-[350px]
              h-[350px]
              bg-orange-300/40
              rounded-full
              blur-3xl
            "
          />

          <Image
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
            alt="Pet Banner"
            width={550}
            height={550}
            className="
              relative
              rounded-[40px]
              object-cover
              shadow-2xl
              border-8
              border-white
            "
          />
        </animated.div>
      </div>
    </section>
  );
};

export default BannerPage;
