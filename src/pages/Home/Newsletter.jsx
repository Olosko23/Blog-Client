import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Newsletter = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Left Section with Texts */}
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-3xl font-semibold mb-4 text-center lg:text-left">
            Stay Informed with our Newsletter
          </h2>
          <h3 className="text-lg text-gray-600 text-center lg:text-left">
            Get the latest posts delivered straight into your inbox
          </h3>
        </div>

        {/* Right Section with Form */}
        <div className="lg:w-1/2">
          <form className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md text-center">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full py-2 px-4 mb-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
              disabled={user}
            />
            <button
              type="submit"
              disabled={user}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Subscribe Now
            </button>
            <p className="text-sm text-gray-600 mt-2">
              By Subscribing you agree to our{" "}
              <Link
                to="/terms_of_service"
                className="text-blue-500 hover:underline"
              >
                terms of service
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
