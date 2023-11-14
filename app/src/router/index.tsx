import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import AuthGuard from "./guards/AuthGuard";
import Layout from "../layout";
import { Login } from "../views/Login";
import { NotFound } from "../views/NotFound";
// import { ThemeProvider, createTheme } from "@mui/material";

const Home = lazy(() => import("../views/Home"));

const Router = () => {
  return (
    <Suspense fallback={"MOCKED LOADER"}>
      <Routes>
        <Route element={<Login />} path={"/login"} />
        <Route element={<AuthGuard />}>
          <Route element={<Layout />}>
            <Route element={<Home />} path="/" />
          </Route>
        </Route>
        <Route element={<NotFound />} path={"*"} />
      </Routes>
    </Suspense>
  );
};

export default Router;
