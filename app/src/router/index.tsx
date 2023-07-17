import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";
import AuthGuard from "./guards/AuthGuard";
import Layout from "../layout";
import { ThemeProvider, createTheme } from "@mui/material";

const Home = lazy(() => import("../views/Home"));

const Router = () => {
  return (
    <Suspense fallback={"MOCKED LOADER"}>
      <Routes>
        <Route element={<AuthGuard />}>
          <Route element={<Layout />}>
            <Route element={<Home />} path="/" />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
