import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  const articles = [
    {
      id: 1,
      title: "React Hooks Tutorial",
      reads: 150,
      category: "Programming",
    },
    {
      id: 2,
      title: "Introduction to Tailwind CSS",
      reads: 120,
      category: "Web Design",
    },
  ];

  return (
    <div className="container max-w-5xl mx-auto mt-24 p-4 lg:p-8 bg-white">
      <div className="rounded shadow p-4 lg:p-8">
        <h1 className="text-2xl lg:text-3xl font-semibold mb-4">Profile</h1>

        {/* User Information */}
        <div className="mb-4 lg:mb-8">
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
          <p className="mb-2">
            <strong>Username:</strong> {user.username}
          </p>
          <p className="mb-2">
            <strong>About:</strong> {user.about}
          </p>
          <p className="mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Location:</strong> {user.location}
          </p>
        </div>

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
                {articles.map((article) => (
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
