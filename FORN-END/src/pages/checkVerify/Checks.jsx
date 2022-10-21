import React from "react";
import { useSelector } from "react-redux";

export const Checks = () => {
  const verifys = useSelector((state) => {
    console.log(state);
    return state.verify.data;
  });

  return (
    <>
      <div className="mockup-code text-center m-80">
        <h1 className="text-2xl bg-orange-600">Account verification</h1>
        <br></br>
        <pre data-prefix="1.">
          <code>Open Gmail</code>
        </pre>
        <pre data-prefix="2." className="text-warning">
          <code>Click To Verify</code>
        </pre>
        <pre data-prefix="3." className="text-success">
          <code>Done!</code>
        </pre>
      </div>
    </>
  );
};
