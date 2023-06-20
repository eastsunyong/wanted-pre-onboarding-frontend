import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Signin,  Signup } from "page";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  );
};

export default Router;
