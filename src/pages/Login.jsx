import { Input } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // You can add authentication logic here, for now, we'll directly navigate
    navigate("/app/dashboard"); // Redirect to dashboard after login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md m-9 p-8 space-y-6 bg-white rounded-xl shadow-md">
        {/* Centering the lock icon and text */}
        <div className="flex flex-col items-center justify-center">
          {/* Lock Icon inside a round structure */}
          <div className="border-4 bg-blue-gray-50 rounded-full p-6 flex items-center justify-center mb-4">
            <img
              src="/src/assets/lockIcon/lock.png"
              alt="lock icon"
              className="w-16 h-16"
            />
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">3H GROUP</h2>
            <p className="text-sm text-gray-600">
              Your account must be authenticated
            </p>
          </div>
        </div>

        {/* Form Submission */}
        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="relative">
            <Input
              type="email"
              id="email"
              label="Email Address"
              className="h-10 w-full"
              placeholder="Email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <Input
              type="password"
              id="password"
              label="Password"
              className="h-10 w-full"
              placeholder="Password"
              required
            />
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
