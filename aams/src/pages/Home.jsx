import React from "react";

const features = [
  {
    title: "Real-time Asset Monitoring",
    desc: "Track architectural assets across multiple locations with live updates.",
  },
  {
    title: "Secure Data Handling",
    desc: "Industry-grade encryption and automated backup to keep your data safe.",
  },
  {
    title: "Intelligent Analytics",
    desc: "Visualize trends and make informed decisions with smart reports.",
  },
  {
    title: "Cloud-Based Access",
    desc: "Manage your assets from anywhere with secure cloud integration.",
  },
  {
    title: "User Role Management",
    desc: "Assign roles and permissions with granular control for your team.",
  },
  {
    title: "Mobile Friendly",
    desc: "Easily manage AAMS on the go with responsive and intuitive design.",
  },
];

const Home = () => {
  return (
    <div className="p-6 text-center">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-10 rounded-xl shadow-xl mb-10 animate-fade-in-up">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">Home</h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Welcome to AAMS – the next-generation Architectural Asset Management System. Empowering you to manage your physical infrastructure smarter and faster.
        </p>
      </div>

      {/* Feature Effects Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl border border-blue-100 transition-all duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-xl font-bold text-blue-600 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Optional Footer Message */}
      <p className="text-gray-500 text-sm">
        Designed to streamline architecture operations with ease and intelligence.
      </p>
    </div>
  );
};

export default Home;
