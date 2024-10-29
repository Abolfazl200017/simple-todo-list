import * as React from "react";
import { UserState } from "../../redux/slices/userSlice";
import { useUserState } from "../../redux/hooks";
import FullPageLoadingSpinner from "../../components/FullPageLoadingSpinner";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
    const { loading, userData }:UserState = useUserState()

    if (loading && !userData)
        return <FullPageLoadingSpinner />
    
    if (userData)
        return <Navigate to="/" replace />;
        
    return <Outlet />
}

export default PublicRoute;