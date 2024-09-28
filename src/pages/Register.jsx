import { Input } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom"; // To handle navigation

const Register = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle form submission
  const handleRegister = (e) => {
    e.preventDefault();
    // You can add user registration logic here, for now, we'll directly navigate
    navigate("/app/login"); // Redirect to dashboard after registration
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
            <p className="text-sm text-gray-600">Create a new account</p>
          </div>
        </div>

        {/* Form Submission */}
        <form className="space-y-4" onSubmit={handleRegister}>
          {/* Name Input */}
          <div className="relative">
            <Input
              type="text"
              id="name"
              label="Full Name"
              className="h-10 w-full"
              placeholder="Full Name"
              required
            />
          </div>

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

          {/* Confirm Password Input */}
          <div className="relative">
            <Input
              type="password"
              id="confirmPassword"
              label="Confirm Password"
              className="h-10 w-full"
              placeholder="Confirm Password"
              required
            />
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              SIGN UP
            </button>
          </div>
        </form>

        {/* Already have an account */}
        <div className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
