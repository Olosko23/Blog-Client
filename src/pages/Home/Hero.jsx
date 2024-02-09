import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Bg from "../../assets/four.jpg";

const Hero = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div
      id="Hero_"
      className="h-[75vh] bg-gradient-to-b from-blue-500 to-blue-700 text-gray-100 flex flex-col justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="text-center mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 text-transparent bg-clip-text">
            Discover the Latest Articles on our Blog
          </span>
        </h1>

        <p className="text-lg mb-6">
          Stay informed with insightful articles written by experts in various
          fields
        </p>
        <div className="flex justify-center space-x-4">
          <div className="py-2 px-4 rounded-md border-2 bg-white text-slate-700 font-semibold hover:bg-slate-700 hover:text-white transition duration-300">
            <Link to="/blogs">Read Now</Link>
          </div>
          {!user && (
            <div className="py-2 px-4 rounded-md border-2 text-white font-semibold bg-slate-700 hover:bg-slate-800 transition duration-300">
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
