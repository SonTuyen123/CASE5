import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { storage } from "../UpLoadImg/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

const UpdateSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email_verify: Yup.string().required("Required"),
});

// check duoi image
// function reverse(str) {
//   return [...str].reverse().join("").split(".", 4)[0];
// }
// function reverseInitial(str) {
//   return [...str].reverse().join("");
// }
// const arr = ["jpeg", "jpg", "gif", "png"];

const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

export default function ListUser() {
  const [datauser, setDataUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [idUser, setIdUser] = useState("");
  const [newUser, setNewUser] = useState([]);
  const [errorImage, setErrorImage] = useState("");
  const [ImageUpload, setImageUpload] = useState(null);
  const [Upload, setUpload] = useState([]);

  // let idUser = useRef();

  const listUerApi = async () => {
    return await axios.get("http://localhost:8080/admin/list");
  };
  const findUerApi = async (data) => {
    return await axios.post("http://localhost:8080/admin/findUser", data);
  };
  const deleteUerApi = async (data) => {
    return await axios.delete("http://localhost:8080/admin/delete", data);
  };

  const UploadImgApi = async (data) => {
    const url = "http://localhost:8080/admin/UploadImageUser";
    return await axios.post(url, data);
  };

  useEffect(() => {
    listUerApi()
      .then((res) => {
        setDataUser(res.data.user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    findUerApi({ id: idUser })
      .then((res) => {
        setNewUser(res.data.user);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [idUser]);

  const handleDeleteUser = (value) => {
    // console.log(value);
    deleteUerApi(value).then();
  };
  const handleEditUser = (value) => {
    // console.log(value);
    setIdUser(value);
    setShowModal(true);
  };
  console.log(newUser);

  return (
    <div className="bg-indigo-50 flex-grow py-12 px-10">
      <div className="flex justify-between">
        <div>
          <h4 className="text-sm font-bold text-indigo-600">Hi Andrei,</h4>
          <h1 className="text-4xl font-bold text-indigo-900 mt-">
            Welcome to Venus!
          </h1>
        </div>
        <div>
          <div className="flex items-center border rounded-lg bg-white w-max py-2 px-4 space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input className="outline-none" type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex space-x-4">
          <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-sm font-semibold text-gray-400">
                Spent this month
              </span>
              <h1 className="text-2xl font-bold">$682.5</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11l7-7 7 7M5 19l7-7 7 7"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-sm font-semibold text-gray-400">
                Spent this month
              </span>
              <h1 className="text-2xl font-bold">$682.5</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-sm font-semibold text-gray-400">
                Spent this month
              </span>
              <h1 className="text-2xl font-bold">$682.5</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
            <div>
              <span className="text-sm font-semibold text-gray-400">
                Spent this month
              </span>
              <h1 className="text-2xl font-bold">$682.5</h1>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs border-current">
          <div className="w-full overflow-x-auto">
            <table className="w-full whitespace-no-wrap">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left  text-white uppercase border-b dark:border-gray-700 bg-slate-600 dark:text-white ">
                  <th className="px-4 py-3 ">Client</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              {datauser.map((item) => (
                <tbody className="bg-white divide-y dark:divide-gray-700 ">
                  <tr className="text-black dark:text-gray-400">
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
                          <p className=" font-bold">{item.username}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {item.firstname} {item.lastname}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-bold text-sm">
                      {item.email}
                    </td>
                    <td className="px-4 py-3 text-xs">
                      {item.email_verify === "true" ? (
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                          Active
                        </span>
                      ) : (
                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-red-700 dark:text-green-100">
                          Inactive
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <button
                        htmlFor="my-modal-3"
                        className="btn btn-circle  bg-blue-700 border-blue-700"
                        onClick={() => {
                          handleEditUser(item._id);
                        }}
                      >
                        <a>
                          <i class="fa-solid fa-pen-to-square fa-2x"></i>
                        </a>
                      </button>
                      <button
                        onClick={() => {
                          handleDeleteUser(item._id);
                        }}
                        className="btn btn-circle bg-red-500 border-red-600"
                      >
                        <i class="fa-solid fa-trash-can fa-2x"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 ">
            <span className="flex items-center col-span-3">
              Showing 21-30 of 100
            </span>
            <span className="col-span-2" />
            <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
              <nav aria-label="Table navigation">
                <ul className="inline-flex items-center">
                  <li>
                    <button
                      className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                      aria-label="Previous"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                      1
                    </button>
                  </li>
                  <li>
                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                      2
                    </button>
                  </li>
                  <li>
                    <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                      3
                    </button>
                  </li>
                  <li>
                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                      4
                    </button>
                  </li>
                  <li>
                    <span className="px-3 py-1">...</span>
                  </li>
                  <li>
                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                      8
                    </button>
                  </li>
                  <li>
                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                      9
                    </button>
                  </li>
                  <li>
                    <button
                      className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                      aria-label="Next"
                    >
                      <svg
                        className="w-4 h-4 fill-current"
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </span>
          </div>
        </div>

        <div />
        <div />
      </div>
      <div />
      <div />

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Update User</h3>
                  <a onClick={() => setShowModal(false)}>
                    <i class="fa-solid fa-x"></i>
                  </a>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <Formik
                    initialValues={{
                      firstname: "",
                      lastname: "",
                      username: "",
                      email_verify: "",
                    }}
                    validationSchema={UpdateSchema}
                    onSubmit={(values, { resetForm }) => {
                      let image = Upload["type"];
                      console.log(
                        "🚀 ~ file: ListUser.jsx ~ line 388 ~ ListUser ~ image",
                        image
                      );

                      if (!validImageTypes.includes(image)) {
                        setErrorImage(true);
                      } else {
                        setErrorImage(false);
                        const imageRef = ref(storage, `image/${Upload}`);
                        uploadBytes(imageRef, Upload).then((snaphost) => {
                          getDownloadURL(snaphost.ref).then((url) => {
                            UploadImgApi({
                              id: newUser._id,
                              image: url,
                              firstname: values.firstname,
                              lastname: values.lastname,
                              username: values.username,
                              email_verify: values.email_verify,
                            });
                          });
                        });
                      }
                    }}
                  >
                    {({
                      errors,
                      touched,
                      isValidating,
                      handleChange,
                      handleSubmit,
                    }) => (
                      <form
                        novalidate=""
                        action=""
                        className="space-y-12 ng-untouched ng-pristine ng-valid"
                      >
                        <div className="space-y-4">
                          <div className="hidden">
                            <label
                              for="first name"
                              className="block mb-2 text-sm"
                            >
                              Id
                            </label>
                            <input
                              type="text"
                              name="id"
                              value={newUser._id}
                              onChange={handleChange}
                              id="first name"
                              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                          </div>
                          <div>
                            <label
                              for="first name"
                              className="block mb-2 text-sm"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              name="firstname"
                              value={newUser.firstname}
                              onChange={handleChange}
                              id="first name"
                              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                            {errors.firstname && touched.firstname ? (
                              <div style={{ color: "red" }}>
                                {errors.firstname}
                              </div>
                            ) : null}
                          </div>
                          <div>
                            <label
                              for="last name"
                              className="block mb-2 text-sm"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              name="lastname"
                              value={newUser.lastname}
                              onChange={handleChange}
                              id="last name"
                              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                            {errors.lastname && touched.lastname ? (
                              <div style={{ color: "red" }}>
                                {errors.lastname}
                              </div>
                            ) : null}
                          </div>
                          <div>
                            <label
                              for="user name"
                              className="block mb-2 text-sm"
                            >
                              User name
                            </label>
                            <input
                              type="text"
                              name="username"
                              value={newUser.username}
                              onChange={handleChange}
                              id="user name"
                              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                            {errors.username && touched.username ? (
                              <div style={{ color: "red" }}>
                                {errors.username}
                              </div>
                            ) : null}
                          </div>

                          <div>
                            <label
                              for="email_verify"
                              className="block mb-2 text-sm"
                            >
                              Status
                            </label>
                            <input
                              type="text"
                              name="email_verify"
                              value={newUser.email_verify}
                              onChange={handleChange}
                              id="email_verify"
                              className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                            />
                            {errors.email_verify && touched.email_verify ? (
                              <div style={{ color: "red" }}>
                                {errors.email_verify}
                              </div>
                            ) : null}
                          </div>
                          <div>
                            <label
                              for="file-upload"
                              className="block mb-2 text-sm"
                            >
                              Photo
                            </label>
                            <div className="border rounded-md border-gray-700 bg-gray-900">
                              <input
                                type="file"
                                name="image"
                                id="file-upload"
                                onChange={(event) => {
                                  setUpload(event.target.files[0]);
                                }}
                              />
                              <label
                                htmlFor="file-upload"
                                className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                              >
                                <p className="z-10 text-xs font-light text-center text-gray-500">
                                  Upload file (JPG,PNG,...)
                                </p>
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
                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                  />
                                </svg>
                              </label>
                            </div>

                            {errorImage && !errors.image ? (
                              <p className="text-red-700">Ảnh không hợp lệ !</p>
                            ) : null}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              onClick={handleSubmit}
                              type="submit"
                            >
                              UPDATE
                            </button>
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
