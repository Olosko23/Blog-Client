//import Con from "../../assets/con.webp";

const Contact = () => {
  return (
    <div className="flex min-h-screen items-center justify-center mt-8 md:mt-16">
      <div className="flex w-full max-w-4xl mx-auto px-2">
        {/* Left Side - Contact Form and Social Links */}-
        <div className="w-full md:w-1/2 pr-8">
          <h2 className="text-3xl font-bold mb-6">Contact Admin</h2>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500"
            >
              Submit
            </button>
          </form>

          {/* Contact Information */}
          <div className="mt-8">
            <p className="text-sm font-medium text-gray-700">
              Contact Information:
            </p>
            <p className="text-gray-700">Phone: +254799590711</p>
            <p className="text-gray-700">Email: admin@phreddy.com</p>
          </div>
          {/* Social Media Links */}
          <div className="mt-8">
            <p className="text-sm font-medium text-gray-700">
              Connect with us on social media:
            </p>
            <div className="flex space-x-4 mt-2">
              {/* Replace these links with the actual URLs */}
              <a href="#" className="text-blue-600 hover:underline">
                Twitter
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Instagram
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                LinkedIn
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                Facebook
              </a>
              <a href="#" className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* Right Side - Graphic */}
        <div className="hidden md:flex w-1/2">
          <div className="h-full p-8">
            {/*
            <img
              src={Con}
              alt="Illustration"
              className="object-cover w-full h-full rounded-md"
  />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
