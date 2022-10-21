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
  console.log(item);
  return (
    <>
      <div className="min-h-screen flex">
        <div className="py-12 px-10 w-1/4">
          <div className="flex space-2 items-center border-b-2 pb-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h1 className="text-3xl font-bold text-indigo-600">VENUS</h1>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-gray-400 hover:text-indigo-600 transition duration-200"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  List User
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/createmp3"
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  Create Mp3
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
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Security
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

      {/* <div className="grid-cols-2">
        <div>câc</div>
        <div className="">
          <table className=" mx-auto rounded-xl mt-8 w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {users.map((user, index) => (
                <tr className="text-gray-700 dark:text-gray-400">
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{user.username}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">{user.phone || null}</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                      {user.status || "No active"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">{user.date || null}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-4 text-sm">
                      <button
                        onClick={(e) => {
                          handleClick(`${user._id}`);
                        }}
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                        aria-label="Edit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                      </button>
                      <button
                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                        aria-label="Delete"
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <div aria-hidden="false">
              <div className={bacgroud}>
                <div
                  role="alert"
                  className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
                >
                  <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                    <div className="w-full flex justify-start text-gray-600 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                        strokeLinejoin="round"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                      Edit User
                    </h1>
                    <label
                      htmlFor="lastname"
                      className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >
                      Last name
                    </label>
                    <input
                      id="lastname"
                      value={item && item.lastname}
                      className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="Last name"
                    />
                    <label
                      htmlFor="fistname"
                      className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >
                      Fist name
                    </label>
                    <input
                      id="fistname"
                      value={item && item.fistname}
                      className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="Fist name"
                    />
                    <label
                      htmlFor="name"
                      className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      value={item && item.username}
                      className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="Username"
                    />
                    <label
                      htmlFor="email"
                      className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      value={item && item.email}
                      className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="email"
                    />
                    <label
                      htmlFor="phone"
                      className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >
                      Phone
                    </label>
                    <div className="relative mb-5 mt-2">
                      <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-credit-card"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <rect x={3} y={5} width={18} height={14} rx={3} />
                          <line x1={3} y1={10} x2={21} y2={10} />
                          <line x1={7} y1={15} x2="7.01" y2={15} />
                          <line x1={11} y1={15} x2={13} y2={15} />
                        </svg>
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        value={item && item.phone}
                        className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                        placeholder="XXXX - XXXX - XXXX - XXXX"
                      />
                    </div>
                    <label
                      htmlFor="expiry"
                      className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >
                      Date
                    </label>
                    <div
                      x-data
                      x-init="flatpickr($refs.datetimewidget, {wrap: true, enableTime: true, dateFormat: 'M j, Y h:i K'});"
                      x-ref="datetimewidget"
                      className="flatpickr container mx-auto col-span-6 sm:col-span-6 mt-5"
                    >
                      <label
                        htmlFor="datetime"
                        className="flex-grow  block font-medium text-sm text-gray-700 mb-1"
                      >
                        Date and Time
                      </label>
                      <div className="flex align-middle align-content-center">
                        <input
                          x-ref="datetime"
                          type="text"
                          id="datetime"
                          data-input
                          placeholder="Select.."
                          className="block w-full px-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-l-md shadow-sm"
                        />
                        <a
                          className="h-11 w-10 input-button cursor-pointer rounded-r-md bg-transparent border-gray-300 border-t border-b border-r"
                          title="clear"
                          data-clear
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 mt-2 ml-1"
                            viewBox="0 0 20 20"
                            fill="#c53030"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <label
                      htmlFor="cvc"
                      className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >
                      Avatar
                    </label>
                    <div className="relative mb-5 mt-2">
                      <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                          type="file"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                          />
                        </svg>
                      </div>
                      <input
                        type="file"
                        // onChange={(event) => {
                        //   setImageUpload(event.target.files[0]);
                        // }}
                      />
                    </div>
                    <div className="flex items-center justify-start w-full">
                      <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                        Submit
                      </button>
                      <button
                        onclick={handleModalHilen}
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                    <button
                      className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                      onclick="modalHandler()"
                      aria-label="close modal"
                      role="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        onClick={handleModalHilen}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
