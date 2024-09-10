import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <div className="text-center">
        {/* Animated 404 Text */}
        <h1 className="text-6xl font-extrabold text-gray-900 mb-4 animate-pulse">
          404
        </h1>

        {/* Animated Subheading */}
        <p className="text-2xl text-gray-700 mb-6 font-light animate-fade-in-up">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Call to Action with Animation */}
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105 duration-300 ease-in-out animate-fade-in"
        >
          <ArrowLeftCircle className="mr-2 h-5 w-5" />
          Go Back Home
        </Link>
      </div>

      {/* Floating Animation for Icon */}
      <div className="mt-8">
        <ArrowLeftCircle className="h-16 w-16 text-yellow-500 animate-bounce" />
      </div>
    </div>
  );
}
