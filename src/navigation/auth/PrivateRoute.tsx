import * as React from "react";
import { registerUser, UserState } from "../../redux/slices/userSlice";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import FullPageLoadingSpinner from "../../components/FullPageLoadingSpinner";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
    const dispatch = useAppDispatch()
    const { loading, error }:UserState = useAppSelector((state) => state.user)

    React.useEffect(() => {
        dispatch(registerUser({password: 'emilyspasss', username: 'emilys'}))
    }, [dispatch])

    
    if (loading)
        return <FullPageLoadingSpinner />
    
    console.log('error is ', error , !!error)

    if (error!=null)
        return <Navigate to="/login" replace />;
        
    return <Outlet />
}

export default PrivateRoute;