import React, { useContext } from "react";
import { AuthContext } from "App";
import { Routes, Route, Navigate } from "react-router-dom";
import { Signin, Signup, TodoPage } from "page";

const Router = () => {
  const { isLog } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/signup" element={isLog ? <Navigate to="/todo" /> : <Signup />} />
        <Route path="/signin" element={isLog ? <Navigate to="/todo" /> : <Signin />} />
        <Route path="/todo" element={isLog ? <TodoPage /> : <Navigate to="/signin" />}/>
      
        <Route path="*" element={isLog ? <Navigate to="/todo"  /> : <Navigate to="/signin" />} />
      </Routes>
    </>
  );
};

export default Router;
