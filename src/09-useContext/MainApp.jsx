import { Navigate, Route, Routes } from "react-router-dom";

import { About, Home, Login } from "./pages";
import { NavBar } from "./components";

export const MainApp = () => {
  return (
    <>
      <NavBar title="MainApp" />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
