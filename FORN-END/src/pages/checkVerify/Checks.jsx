import React from "react";
import { useSelector } from "react-redux";

export const Checks = () => {
  const verifys = useSelector((state) => {
    console.log(state);
    return state.verify.data;
  });

  return (
    <>
      <div className="mockup-phone text-center m-40 grid place-content-center">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">
            <h1 className="text-2xl font-bold ">
              <u>Account verification !</u>
            </h1>
            <br></br>
            <i class="fa-sharp fa-solid fa-envelope fa-2x"></i>

            <pre data-prefix="1.">
              <code>1.Open Gmail</code>
            </pre>
            <pre data-prefix="2." className="text-warning">
              <code>2.Click To Verify</code>
            </pre>
            <pre data-prefix="3." className="text-success">
              <code>3.Done!</code>
            </pre>
            <br></br>
            <div className="flex space-x-2 animate-pulse">
            <div className="w-3 h-3 bg-fuchsia-600 rounded-full" />
            <div className="w-3 h-3 bg-fuchsia-600 rounded-full" />
            <div className="w-3 h-3 bg-fuchsia-600 rounded-full" />
          </div>
          </div>
         
        </div>
      </div>
    </>
  );
};
