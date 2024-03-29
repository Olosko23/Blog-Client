import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const [userdetails, setUserdetails] = useState(null);
  const [userArticles, setUserArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const user_id = user._id;

  const getUserDetails = async () => {
    try {
      const response = await axios.get(
        `https://phreddy-blog.onrender.com/api/user/${user_id}`
      );
      setUserdetails(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const getUserArticles = async () => {
    try {
      const response = await axios.get(
        `https://phreddy-blog.onrender.com/api/user/articles/${user_id}`
      );
      setUserArticles(response.data);
    } catch (error) {
      console.error("Error fetching user articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
    getUserArticles();
  }, []);

  return (
    <div className="container max-w-5xl mx-auto mt-24 p-4 lg:p-8 bg-white">
      <div className="rounded shadow p-4 lg:p-8">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Profile</h1>

        {/* User Information */}
        {loading ? (
          <div className="flex flex-col lg:flex-row justify-center items-center mb-4 lg:mb-6 animate-pulse">
            <div className="h-24 w-24 lg:h-32 lg:w-32 border-gray-300 border-8 border-t-8 border-t-blue-600 rounded-full animate-spin" />
          </div>
        ) : (
          <div className="mb-4 lg:mb-8">
            {userdetails && (
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4 lg:mb-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-0">
                  User Information
                </h2>
                <Link
                  to="/update_profile"
                  className="font-semibold hover:underline text-blue-700"
                >
                  Update Profile
                </Link>
              </div>
            )}
            {userdetails && (
              <div className="flex justify-between flex-col md:flex-row">
                <div className="order-2 md:order-1">
                  <p className="mb-2">
                    <strong>Username:</strong> {userdetails.username}
                  </p>
                  <p className="mb-2">
                    <strong>About:</strong> {userdetails.about}
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> {userdetails.email}
                  </p>
                  <p>
                    <strong>Occupation:</strong> {userdetails.occupation}
                  </p>
                </div>
                <div className="md:mr-5 grid md:place-items-center order-1 md:order-2 my-4 md:my-0">
                  {userdetails && userdetails.avatar && (
                    <img
                      src={userdetails.avatar.imageUrl}
                      className="h-24 w-24 rounded-full"
                      alt="Author_Image"
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="w-full">
          <h2 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6 md:text-center text-start text-blue-600">
            Your Articles
          </h2>
          {userArticles.length === 0 ? (
            <Link
              to="/create"
              className="text-blue-500 font-semibold text-center"
            >
              Create Articles
            </Link>
          ) : (
            <div className="">
              <table className="w-full lg:w-auto border border-collapse">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border p-2">Title</th>
                    <th className="border p-2">Reads</th>
                    <th className="border p-2">Category</th>
                    <th className="border p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userArticles.map((article) => (
                    <tr key={article._id}>
                      <td className="border p-2">
                        <Link to={`/article/${article._id}`} key={article._id}>
                          <span className="hover:underline">
                            {article.title}
                          </span>
                        </Link>
                      </td>
                      <td className="border p-2">{article.reads}</td>
                      <td className="border p-2">{article.category}</td>
                      <td className="border p-2">
                        <button className="mr-2 text-blue-500">Edit</button>
                        <button className="text-red-500">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
