import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Home from "../pages/home/Home";
import PrivateRoute from "./auth/PrivateRoute";
import { HOME, LOGIN } from "./CONSTANT";

export const RouterConfig = () => {
    return (
        <Routes>
            <Route path={LOGIN} element={<Login />} />
            <Route element={<PrivateRoute />} >
                <Route path={HOME} element={<Home />} />
            </Route>
        </Routes>
    )
}