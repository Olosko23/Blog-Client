import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setIsVerified } from "../../store/Slices/userSlice";

const Details = () => {
  const [avatar, setAvatar] = useState(null);
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [facebookUrl, setFacebookUrl] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [occupation, setOccupation] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  const userId = user._id;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Handle avatar file change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle avatar upload
  const handleAvatar = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);

      const response = await axios.patch(
        `https://phreddy-blog.onrender.com/api/profile/avatar/${userId}`,
        formData
      );

      if (response.status === 200) {
        console.log("Avatar addedd successfully");
        setLoading(false);
        setSuccess(true);
        setMessage("Profile Saved Successfully!");
      }
    } catch (error) {
      console.error("Avatar upload failed:", error);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = user._id;
    setMessage("");

    try {
      setLoading(true);
      const response = await axios.patch(
        `https://phreddy-blog.onrender.com/api/profile/create/${userId}`,
        {
          about,
          twitterUrl,
          instagramUrl,
          facebookUrl,
          whatsappUrl,
          linkedinUrl,
          youtubeUrl,
          occupation,
        }
      );

      if (response.status === 200) {
        console.log("Profile updated successfully!");
        handleAvatar();
      }
    } catch (error) {
      console.error("Profile update failed:", error);
      setLoading(false);
    }
  };

  const dispatch = useDispatch();

  const handleVerify = async (e) => {
    setMessage("");
    try {
      const response = await axios.patch(
        `https://phreddy-blog.onrender.com/api/verify/${userId}`
      );

      if (response.status === 200) {
        dispatch(setIsVerified());
        navigate("/profile");
      } else {
        console.error("User verification failed");
      }
    } catch (error) {
      console.error("User verification failed:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-4xl py-12 mt-24">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
        Create Your Profile
      </h1>
      <p className="text-gray-700 text-center">
        To create an article, first you will have to create your profile
      </p>

      <form onSubmit={handleSubmit} className="shadow-md rounded-md p-4">
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
              required
              onChange={handleAvatarChange}
              className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
            />
          </div>
          <p className="text-gray-500 text-sm">
            Upload your avatar. Accepted formats: png, webp, avif, jpeg, or svg.
          </p>
          <div className="my-2 py-1 mx-4">
            {avatarPreview && (
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="mt-2 w-16 h-16 object-cover rounded"
              />
            )}
          </div>
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
            required
            onChange={(e) => setAbout(e.target.value)}
            className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
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
            Twitter profile URL (optional):
          </label>
          <input
            type="text"
            id="socialMedia"
            value={twitterUrl}
            onChange={(e) => setTwitterUrl(e.target.value)}
            className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="socialMedia"
            className="block text-gray-600 font-semibold mb-2"
          >
            Instagram Profile URL (optional):
          </label>
          <input
            type="text"
            id="socialMedia"
            value={instagramUrl}
            onChange={(e) => setInstagramUrl(e.target.value)}
            className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="socialMedia"
            className="block text-gray-600 font-semibold mb-2"
          >
            Active WhatsApp Number (optional):
          </label>
          <input
            type="phone"
            id="socialMedia"
            value={whatsappUrl}
            onChange={(e) => setWhatsappUrl(e.target.value)}
            className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="socialMedia"
            className="block text-gray-600 font-semibold mb-2"
          >
            Facebook Profile URL (optional):
          </label>
          <input
            type="text"
            id="socialMedia"
            value={facebookUrl}
            onChange={(e) => setFacebookUrl(e.target.value)}
            className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="socialMedia"
            className="block text-gray-600 font-semibold mb-2"
          >
            LinkedIn Profile URL (optional):
          </label>
          <input
            type="text"
            id="socialMedia"
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
            className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="socialMedia"
            className="block text-gray-600 font-semibold mb-2"
          >
            YouTube Profile URL (optional):
          </label>
          <input
            type="text"
            id="socialMedia"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
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
            required
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
          />
          <p className="text-gray-500 text-sm">
            Specify your occupation or job title.
          </p>
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-gray-600 font-semibold mb-2"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-blue-500 rounded focus:border-blue-500 focus:outline-none"
          />
          <p className="text-gray-500 text-sm">Where are you from.</p>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {loading ? "Please Wait" : "Save Profile"}
          </button>
        </div>
        {success && (
          <div
            onClick={handleVerify}
            className="mt-4 flex justify-center space-x-2"
          >
            <span className="flex space-x-1 items-center justify-center">
              <p className="font-semibold text-green-600 text-center">
                {message}
              </p>
              <button className="font-semibold text-green-600 text-center underline cursor-pointer">
                Proceed
              </button>
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Details;
