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

  //const user = useSelector((state) => state.user.user);
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
          <div className="h-[75dvh] flex w-full flex-col lg:flex-row justify-between items-start lg:items-center mb-4 lg:mb-6 animate-pulse">
            <div className="bg-gray-300 h-4 w-20 mb-2 lg:mb-0"></div>
            <div className="bg-gray-300 h-4 w-16"></div>
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
              <>
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
              </>
            )}
          </div>
        )}

        {/* Articles Table */}
        <div>
          <h2 className="text-lg lg:text-xl font-semibold mb-4 lg:mb-6">
            Your Articles
          </h2>
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
                  <tr key={article.id}>
                    <td className="border p-2">{article.title}</td>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
