import React, { useState } from "react";
import axios from "axios";
import loginImg from "../assets/login.jpg";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login() {
  let navigate = useNavigate();
  const [errorsMessage, setErrorsMessage] = useState("");

  const login = async (data) => {
    return await axios.post("http://localhost:8080/admin/login", data);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-gray-800 flex flex-col justify-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            let data = {
              email: values.email,
              password: values.password,
            };
            login(data)
              .then((res) => {
                let data = res.data.message;
                if (data === "Đăng nhập thất bại! Vui lòng thử lại !") {
                  setErrorsMessage(data);
                } else if (data === "Sai mật khẩu ! Vui lòng thử lại !") {
                  setErrorsMessage(data);
                } else if (
                  data ===
                  "Tài khoản chưa được xác thực. Vui lòng kiểm tra email !"
                ) {
                  setErrorsMessage(data);
                } else {
                  console.log(res.data.data);
                  let token = JSON.stringify(res.data.data);
                  localStorage.setItem("token", token);
                  Swal.fire("Đăng nhập thành công !").then((result) => {
                    navigate("/admin");
                  });
                }
              })
              .catch((e) => {
                setErrorsMessage(e.response.data.message);
              });
          }}
        >
          {({ errors, touched, isValidating, handleChange, handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              className="max-w-[400px] border border-sky-500 w-full mx-auto rounded-lg bg-gray-900 p-8 px-8"
            >
              <h2 className="text-4xl dark:text-white font-bold text-center">
                SIGN IN
              </h2>

              <div className="flex flex-col text-gray-400 py-2">
                {errorsMessage ? (
                  <a className="text-red-500">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {errorsMessage}
                  </a>
                ) : null}
                <label>Email</label>
                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <div style={{ color: "red" }}>{errors.email}</div>
                ) : null}
              </div>
              <div className="flex flex-col text-gray-400 py-2">
                <label>Password</label>
                <input
                  id="password"
                  name="password"
                  onChange={handleChange}
                  className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                  type="password"
                />
                {errors.password && touched.password ? (
                  <div style={{ color: "red" }}>{errors.password}</div>
                ) : null}
              </div>
              <div className="flex justify-between text-gray-400 py-2">
                <p className="flex items-center">
                  <input className="mr-2" type="checkbox" /> Remember Me
                </p>
                <p>Forgot Password</p>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
              >
                SIGNIN
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
