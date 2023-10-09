import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import PropTypes from 'prop-types';
import Navbar from "../layout/Navbar/Navbar";

const PrivateRoute = ({ children }) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return (
            <>
            <Navbar>
            </Navbar>
            <div className=" text-center h-[60vh] ">
                <div className="mt-48 loading loading-infinity loading-lg"></div>
            </div>
            </>
        )
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
}
export default PrivateRoute;