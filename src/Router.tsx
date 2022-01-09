import { Routes, Route } from "react-router-dom";

import * as routes from "./constants/routes";

import Login from "./pages/Login";
import Landing from "./pages/Landing";

const Router = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Landing />} />
      <Route path={routes.LOGIN} element={<Login />} />
    </Routes>
  );
};

export default Router;
