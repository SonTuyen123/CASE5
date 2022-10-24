import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink, Outlet } from "react-router-dom";
export const Admins = () => {
  const [users, SetUsers] = useState([]);
  const [item, setItem] = useState("");

  const ProductsApi = async () => {
    let token = JSON.parse(localStorage.getItem("token"));
    const url = "http://localhost:8080/admin/list";
    return await axios.get(url, {
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  useEffect(() => {
    ProductsApi()
      .then((res) => {
        let data = res.data.user;
        SetUsers(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleClick = (id) => {
    users.forEach((item) => {
      if (item._id === id) {
        setItem(item);
      }
    });
  };
  return (
    <>
      <div className="min-h-screen flex">
        <div className="py-12 px-10 w-1/4">
          <div className="flex space-2 items-center border-b-2 pb-4">
            <div>
              <i class="fa-brands fa-react fa-6x"></i>
            </div>
            <div className="ml-3">
              <h1 className="text-3xl font-bold text-indigo-600">Đẳng's Cấp</h1>
              <p className="text-center text-sm text-indigo-600 mt-1 font-serif">
                DASHBOARD
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-6 p-2 bg-indigo-600 rounded-md">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
                />
              </svg>
            </div>
            <div>
              <p className="text-lg text-white font-semibold">Dashboard</p>
            </div>
          </div>
          <div className="mt-8">
            <ul className="space-y-10">
              <li>
                <Link
                  to="/admin/list"
                  className="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
                >
                  <a>
                    <i class="fa-solid fa-list fa-2x"></i>&nbsp;
                  </a>
                  List User
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/createmp3"
                  className="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
                >
                  <i class="fa-solid fa-plus fa-2x">&nbsp;</i>
                  Create Mp3
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/listmp3"
                  className="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
                >
                  <i class="fa-solid fa-music fa-2x">&nbsp;</i>
                  List Mp3
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Schedules
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Payouts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="flex mt-20 space-x-4 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400 hover:text-indigo-600 transition duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
            <a
              href="#"
              className="block font-semibold text-gray-500 hover:text-indigo-600 transition duration-200"
            >
              Logout
            </a>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </>
  );
};
