import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link href="/">
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
