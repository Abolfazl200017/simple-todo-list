import * as React from "react";
import { UserState } from "../../redux/user/userSlices";
import { useUserState } from "../../redux/hooks";
import FullPageLoadingSpinner from "../../components/FullPageLoadingSpinner";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function PublicRoute() {
    const { loading, userData }:UserState = useUserState()
    const location = useLocation()

    if (loading && !userData)
        return <FullPageLoadingSpinner />
    
    if (userData && location.pathname == '/login')
        return <Navigate to="/" replace />;
        
    return <Outlet />
}

export default PublicRoute;