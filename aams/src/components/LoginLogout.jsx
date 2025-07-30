import React, { useState, useEffect } from "react";

const LoginLogout = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [mode, setMode] = useState("signup");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchCurrentUser = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        credentials: "include"
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    } catch (err) {
      console.error("Auth check failed", err);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        const err = await res.json();
        alert(err.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        const err = await res.json();
        alert(err.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include"
      });
      setUser(null);
      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-2xl mt-10">
      {user ? (
        <div className="text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-green-600 drop-shadow-md">
            Welcome, {user.name}!
          </h2>
          <p className="mb-6 text-gray-600">{user.email}</p>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition duration-300"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          {/* Tabs */}
          <div className="flex justify-center mb-8 border-b-2 border-gray-200">
            <button
              onClick={() => setMode("signup")}
              className={`relative px-6 py-2 font-semibold transition-colors duration-300 ${mode === "signup" ? "text-blue-600" : "text-gray-500 hover:text-blue-600"}`}
            >
              Sign Up
              {mode === "signup" && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full" />
              )}
            </button>
            <button
              onClick={() => setMode("login")}
              className={`relative px-6 py-2 font-semibold transition-colors duration-300 ${mode === "login" ? "text-blue-600" : "text-gray-500 hover:text-blue-600"}`}
            >
              Login
              {mode === "login" && (
                <span className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full" />
              )}
            </button>
          </div>

          {/* Forms */}
          <form onSubmit={mode === "signup" ? handleSignUp : handleLogin} className="space-y-6">
            {mode === "signup" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {mode === "signup" || mode === "login" ? (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            ) : null}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginLogout;
