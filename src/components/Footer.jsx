import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FooterPage = () => {
  return (
    <footer className="bg-gray-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & About */}
          <div>
            <h2 className="text-4xl font-extrabold text-orange-400">PetNest</h2>

            <p className="mt-5 text-gray-300 leading-7">
              PetNest helps loving pets find safe, caring, and happy homes.
              Discover your perfect companion and make adoption easier than
              ever.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Contact Information</h3>

            <div className="space-y-4 text-gray-300">
              <p>📧 support@petnest.com</p>

              <p>📞 +880 1234-567890</p>

              <p>📍 Feni, Bangladesh</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Follow Us</h3>

            <div className="flex items-center gap-5">
              {/* Facebook */}
              <Link
                href="https://facebook.com"
                target="_blank"
                className="
                  group
                  w-14
                  h-14
                  rounded-full
                  bg-white/10
                  hover:bg-blue-600
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  hover:scale-110
                  shadow-lg
                "
              >
                <FaFacebookF className="text-2xl group-hover:rotate-12 transition-all duration-300" />
              </Link>

              {/* Instagram */}
              <Link
                href="https://instagram.com"
                target="_blank"
                className="
                  group
                  w-14
                  h-14
                  rounded-full
                  bg-white/10
                  hover:bg-pink-500
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  hover:scale-110
                  shadow-lg
                "
              >
                <FaInstagram className="text-2xl group-hover:rotate-12 transition-all duration-300" />
              </Link>

              {/* Twitter */}
              <Link
                href="https://twitter.com"
                target="_blank"
                className="
                  group
                  w-14
                  h-14
                  rounded-full
                  bg-white/10
                  hover:bg-sky-500
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  hover:scale-110
                  shadow-lg
                "
              >
                <FaTwitter className="text-2xl group-hover:rotate-12 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="
            border-t
            border-white/10
            mt-14
            pt-6
            text-center
            text-gray-400
            text-sm
          "
        >
          © 2026 PetNest. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
