import React from "react";

const Profile = () => {
  const user = {
    username: "john_doe",
    email: "john.doe@example.com",
  };

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
    <div className="container max-w-5xl mx-auto mt-24 p-8 bg-white">
      <div className="rounded shadow p-8">
        <h1 className="text-3xl font-semibold mb-4">Profile</h1>

        {/* User Information */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">User Information</h2>
          <p>
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {/* Add more user information fields as needed */}
        </div>

        {/* Articles Table */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Articles</h2>
          <table className="w-full border border-collapse">
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
  );
};

export default Profile;
