import { Outlet, Navigate, useLocation } from "react-router-dom";
// import { selectCurrentAuthState } from "../../features/auth/authSlice";
// import { useSelector } from "react-redux";
import { useVerifyMutation } from "../../features/auth/authApiSlice";
import { useEffect, useState } from "react";

const ProtectedRoutes = () => {
    const [verify, { isLoading, isError, isSuccess }] = useVerifyMutation();
    // const [isVerified, setIsVerified] = useState(false);
    // const token = useSelector((state) => { state.auth.toekn });
    const location = useLocation();

    useEffect(() => {

        verify()

    }, []);

    return (
        <>
            {isLoading && <h1>Loading...</h1>}
            {isError && <Navigate to="/login" state={{ from: location }} replace={true} />}
            {isSuccess && <Outlet />}
        </>
        // !isVerified ? <Navigate to="/login" state={{ from: location }} replace={true} /> : <Outlet />
    )
}

export default ProtectedRoutes