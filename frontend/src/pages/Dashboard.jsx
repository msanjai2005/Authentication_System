import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  const { backendurl, userData, setIsLoading } = useContext(AppContext);

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      await axios.post(
        `${backendurl}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      window.location.reload()
    } catch (error) {
      console.log("Logout Error:", error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[90dvh] bg-gray-100 p-6">
      {/* Container */}
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* User Card */}
        <div className="bg-white shadow rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Welcome Back 👋
          </h2>

          <p className="text-gray-600">You are successfully logged in.</p>

          <div className="mt-4">
            <div className="text-gray-700">
              <strong>Name:</strong> {userData?.name}
            </div>
            <div className="text-gray-700">
              <strong>Email:</strong> {userData?.email}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-700">
              Profile Status
            </h3>
            <p className="text-gray-600 mt-2">Verified User</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-700">
              Total Logins
            </h3>
            <p className="text-gray-600 mt-2">14 times</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-gray-700">
              Account Created
            </h3>
            <p className="text-gray-600 mt-2">
              {userData?.createdAt.split("T")[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
