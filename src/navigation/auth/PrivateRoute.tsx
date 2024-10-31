import { UserState } from "../../redux/user/userSlices";
import { useUserState } from "../../redux/hooks";
import FullPageLoadingSpinner from "components/FullPageLoadingSpinner";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
    const { userData, initialized }:UserState = useUserState()

    if (!initialized)
        return <FullPageLoadingSpinner />
    
    if (!userData)
        return <Navigate to="/login" replace />;
        
    return <Outlet />
}

export default PrivateRoute;