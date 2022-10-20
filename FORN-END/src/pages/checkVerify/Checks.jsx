import React from "react";
import { useSelector } from "react-redux";

export const Checks = () => {
  const verifys = useSelector((state) => {
    console.log(state);
    return state.verify.data;
  });

  return (
    <div>
      <h1>Checks EMail</h1>
    </div>
  );
};
