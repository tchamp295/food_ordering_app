"use client";
import { FiMail, FiLock } from "react-icons/fi"; // Importing necessary icons
import Link from "next/link";
import { useState } from "react";

import { useRouter } from "next/navigation";
import { TiLockClosedOutline } from "react-icons/ti";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid credentials !");
        setLoading(false); // Reset loading state on error
        return;
      }
      router.replace("/profile"); // Corrected redirection
    } catch (error) {
      console.error(error);
      setError("An unexpected error occurred."); // Provide generic error message
      setLoading(false); // Reset loading state on error
    }
  };
  return (

      <div className="flex items-center justify-center h-[400px] p-3">
        <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl text-orange-500 mb-8 text-center">Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FiMail className="text-gray-400 mr-3" />
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
              <FiLock className="text-gray-400 mr-3" />
              <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent focus:outline-none focus:bg-transparent"
              />
            </div>
            <div className="mt-4 text-right">
              <Link href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-400 transition-colors w-full"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            {error && (
              <div className="bg-red-500 text-white py-2 px-4 rounded-md">
                {error}
              </div>
            )}
          </form>
          <button className="mt-4 ">Login with Google</button>
        </div>
      </div>
  
  );
};

export default LoginPage;
