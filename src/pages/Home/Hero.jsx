const Hero = () => {
  return (
    <div className="h-[75vh] bg-gradient-to-b from-blue-500 to-blue-700 text-white flex flex-col justify-center">
      <div className="text-center mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Discover the Latest Articles on our Blog
        </h1>
        <p className="text-lg mb-6">
          Stay informed with insightful articles written by experts in various
          fields
        </p>
        <div className="flex justify-center space-x-4">
          <button className="py-2 px-4 rounded-md border-2 bg-white text-slate-700 font-semibold hover:bg-slate-700 hover:text-white transition duration-300">
            Read Now
          </button>
          <button className="py-2 px-4 rounded-md border-2 text-white font-semibold bg-slate-700 hover:bg-slate-800 transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
