import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { storage } from "../UpLoadImg/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { Formik } from "formik";
import * as Yup from "yup";
import parse from "url-parse";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const inputSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  singer: Yup.string().required("Required"),
});

export default function Createmp3() {
  let navigate = useNavigate();


  const [Upload, setUpload] = useState([]);
  const [mp3List, setMp3List] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const [urlImage, setUrlImage] = useState("");

  const UploadApi = async (data) => {
    // let token = JSON.parse(localStorage.getItem("token"));
    const url = "http://localhost:8080/admin/upload";
    return await axios.post(url, data);
  };

  let fileupload = useRef;
  let setFlag = useRef;

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

        <div className="text-2xl mt-4 mb-4 text-indigo-700">
          <h1>Create mp3</h1>
        </div>

        <Formik
          initialValues={{
            name: "",
            category: "",
            singer: "",
          }}
          validationSchema={inputSchema}
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            let validImageTypes = ["image/gif", "image/jpeg", "image/png"];
            let validMp3Types = ["audio/mpeg"];
            let types = /(\.|\/)(mp3)$/i;
            console.log(Upload);

            fileupload = {};
            for (let i = 0; i < Upload.length; i++) {
              fileupload.name = values.name;
              fileupload.category = values.category;
              fileupload.singer = values.singer;
              if (Upload.length === 0) {
                return (setFlag.status = 1);
              } else {
                setFlag.status = 2;
                console.log(1);
                const mp3Ref = ref(storage, `mp3/${Upload[i].name}`);
                await uploadBytes(mp3Ref, Upload[i])
                  .then(async (res) => {
                    await getDownloadURL(res.ref).then((url) => {
                      let data = parse(url).pathname;
                      // console.log(data);
                      if (types.test(data)) {
                        fileupload.mp3 = url;
                      } else {
                        fileupload.image = url;
                      }
                    });
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              }
            }
            // console.log(fileupload);
            console.log(setFlag);
            if ((setFlag.status = 2)) {
              UploadApi(fileupload)
                .then((res) => {
                  if (res.data.message === "Thêm thành công !") {
                    Swal.fire("Thêm bài hát thành công !").then((result) => {
                      navigate("/admin/listmp3");
                    });
                  }
                })
                .catch((e) => {
                  console.log(e);
                });
            } else {
              Swal.fire("Không được để trống Image Mp3 hoặc File Mp3 !");
            }
          }}
        >
          {({ errors, touched, isValidating, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium  text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="text"
                  name="name"
                  onChange={handleChange}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
                {errors.name && touched.name ? (
                  <div style={{ color: "red" }}>{errors.name}</div>
                ) : null}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Thể loại
                </label>
                <select
                 type="text"
                 name="category"
                 onChange={handleChange}
                 id="text"
                 className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                 required
                >
                  <option value="Ballad">Ballad</option>
                  <option value="Bolero">Bolero</option>
                  <option selected value="Rap">Rap</option>
                </select>

              </div>
              <div className="mb-6">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Ca sỹ
                </label>
                <input
                  type="text"
                  name="singer"
                  onChange={handleChange}
                  id="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />{" "}
                {errors.singer && touched.singer ? (
                  <div style={{ color: "red" }}>{errors.singer}</div>
                ) : null}
              </div>
              <div className="mb-6 ">
                <label
                  htmlFor="mp3"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Image
                </label>
                <div className="bg-white border p-4 border-black rounded-xl ">
                  <input
                    onChange={(event) => {
                      setUpload([...Upload, event.target.files[0]]);
                    }}
                    type="file"
                    name="image"
                    id="file-upload"
                  />

                  <label
                    htmlFor="file-upload"
                    className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                  >
                    <p className="z-10 text-xs font-light text-center text-black">
                      Upload file image
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              <div className="mb-6 ">
                <label
                  htmlFor="mp3"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  File
                </label>
                <div className="bg-white border p-4 border-black rounded-xl ">
                  <input
                    onChange={(event) => {
                      setUpload([...Upload, event.target.files[0]]);
                    }}
                    type="file"
                    name="mp3"
                    id="filemp3-upload"
                  />
                  <label
                    htmlFor="filemp3-upload"
                    className="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer"
                  >
                    <p className="z-10 text-xs font-light text-center text-black">
                      Upload file mp3
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Upload
              </button>
            </form>
          )}
        </Formik>

        <div />
        <div />
      </div>
      <div />
      <div />
    </div>
  );
}
