import React from "react";
import LoginLogout from "../components/LoginLogout";

const FAQ = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-600">FAQ Page</h1>
        <div className="w-80">
          <LoginLogout />
        </div>
      </div>
      <p>This is the FAQ page content.</p>
    </div>
  );
};

export default FAQ;
