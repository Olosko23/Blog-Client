import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [avatar, setAvatar] = useState(null);
  const [about, setAbout] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [occupation, setOccupation] = useState("");
  const [contactDetails, setContactDetails] = useState("");

  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Handle avatar file change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    // If you want to display a preview of the selected image
    // You can use the FileReader API to read the image and set it as a data URL
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Update the state with the data URL
        setAvatarPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [avatarPreview, setAvatarPreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      avatar,
      about,
      socialMedia,
      occupation,
      contactDetails,
    });
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12 mt-24">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
        Update Your Profile
      </h1>
      <p className="text-gray-700 text-center">
        To create an article, first you will have to create your profile
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="avatar"
            className="block text-gray-600 font-semibold mb-2"
          >
            Avatar:
          </label>
          <div className="relative">
            {/* Input */}
            <input
              type="file"
              id="avatar"
              onChange={handleAvatarChange}
              className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
            />
            {/* Preview */}
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="mt-2 w-16 h-16 object-cover rounded"
              />
            )}
          </div>
          <p className="text-gray-500 text-sm">
            Upload your avatar. Accepted formats: png, webp, avif, jpeg, or svg.
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="about"
            className="block text-gray-600 font-semibold mb-2"
          >
            About:
          </label>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <p className="text-gray-500 text-sm">
            Provide a brief description about yourself.
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="socialMedia"
            className="block text-gray-600 font-semibold mb-2"
          >
            Twitter profile URL:
          </label>
          <input
            type="text"
            id="socialMedia"
            value={socialMedia}
            onChange={(e) => setSocialMedia(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="socialMedia"
            className="block text-gray-600 font-semibold mb-2"
          >
            Instagram Profile URL:
          </label>
          <input
            type="text"
            id="socialMedia"
            value={socialMedia}
            onChange={(e) => setSocialMedia(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="socialMedia"
            className="block text-gray-600 font-semibold mb-2"
          >
            Facebook Profile URL:
          </label>
          <input
            type="text"
            id="socialMedia"
            value={socialMedia}
            onChange={(e) => setSocialMedia(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="socialMedia"
            className="block text-gray-600 font-semibold mb-2"
          >
            LinkedIn Profile URL:
          </label>
          <input
            type="text"
            id="socialMedia"
            value={socialMedia}
            onChange={(e) => setSocialMedia(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="socialMedia"
            className="block text-gray-600 font-semibold mb-2"
          >
            YouTube Profile URL:
          </label>
          <input
            type="text"
            id="socialMedia"
            value={socialMedia}
            onChange={(e) => setSocialMedia(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="occupation"
            className="block text-gray-600 font-semibold mb-2"
          >
            Occupation:
          </label>
          <input
            type="text"
            id="occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <p className="text-gray-500 text-sm">
            Specify your occupation or job title.
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="contactDetails"
            className="block text-gray-600 font-semibold mb-2"
          >
            Contact Details:
          </label>
          <input
            type="text"
            id="contactDetails"
            value={contactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <p className="text-gray-500 text-sm">
            Provide your contact details (phone number or physicall address).
          </p>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;
