import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Verify = () => {
  let navigate = useNavigate();
  let verify = JSON.parse(localStorage.getItem("verifyRegister"));

  const verifyApi = async () => {
    return await axios.post("http://localhost:8080/admin/verify", verify);
  };
  useEffect(() => {
    verifyApi().then((res) => {
      let data = res.data.message;
      if (data === "verify thanh cong!") {
        navigate("/login");
      }
    });
  });
  return (
    <>
      <div className="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
          <img
            className="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt
          />
        </div>
      </div>
    </>
  );
};
