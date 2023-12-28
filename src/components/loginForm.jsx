import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace "YOUR_API_ENDPOINT" with the actual API endpoint for login
      const response = await axios.post("YOUR_API_ENDPOINT", formData);

      if (response.status === 200) {
        // Successful login logic, e.g., redirect to another page
        console.log("Login successful");
      } else {
        // Handle login failure, e.g., display an error message
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred during login:", error.message);
    }
  };

  return (
    <div className="bg-blue-500 p-8 rounded-md shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-white mb-1">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-white mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 rounded-md border border-blue-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
