import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Home from "../pages/home/Home";
import PrivateRoute from "./auth/PrivateRoute";

export const RouterConfig = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />} >
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </div>
    )
}