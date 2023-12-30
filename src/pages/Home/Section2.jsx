import Pic1 from "../../assets/pic.jpg";

const Section2 = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-7xl py-12 text-center sm:text-start">
        {/* Added Header */}
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Explore Our Features
        </h1>

        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <section className="hidden lg:flex lg:w-1/2 pr-8">
            <img
              src={Pic1}
              alt="Section2_Image"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </section>

          {/* Text Section */}
          <section className="lg:w-1/2 pl-8">
            <div className="border-l-4 pl-4">
              <div className="mb-6">
                <h2 className="font-semibold text-xl mb-2">
                  Connect with a community
                </h2>
                <p className="text-gray-600">
                  Join a vibrant community of like-minded individuals who share
                  their thoughts and insights on a wide range of topics.
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="font-semibold text-xl mb-2">
                Explore diverse topics
              </h2>
              <p className="text-gray-600">
                Discover a wealth of articles covering various subject, from
                technology and lifestyle to health and finance
              </p>
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-2">
                Gain Expert Insight
              </h2>
              <p className="text-gray-600">
                Learn from industry experts who share their knowledge and
                experience through engaging and informative articles
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Section2;
