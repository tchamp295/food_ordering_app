"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
    const router = useRouter();
  const [name, setName] = useState("");
  //   console.log(name);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please ensure  all  fields re filled !");
      return;
    }
    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const { user } = await resUserExists.json();
      if (user) {
        setError("user already exists !");
        return;
      }
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        console.log("user registration failed !");
      }
    } catch (error) {
      console.log("error occurred during registration ", error);
      setError("An error occurred during registration.");
    }
  };
  return (
    <div className="flex max-w-lg mx-auto p-3 mt-4 items-center justify-center h-screen ">
      <div className="max-w-lg w-full shadow-lg p-5 rounded-lg border-t-4 border-purple-300">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-gradient-to-r from-pink-300 to-purple-500  text-lg rounded-lg text-white font-bold cursor-pointer py-2 uppercase ">
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-2 px-1 rounded-md">
              {error}
            </div>
          )}
          <Link className="text-lg text-slate-500  mt-2 text-right" href={"/login"}>
            Already have an account?
            <span className="underline ml-1">Login</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage