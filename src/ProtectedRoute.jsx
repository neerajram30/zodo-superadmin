import { useAuth } from "./hooks/auth/useAuth";
import FullscreenLoader from "./components/loadings/FullscreenLoader";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoute(props) {
  const { allowedRoles } = props;
  const { user, isLoading } = useAuth();
  const userRole = user?.user_type;
  const token = localStorage.getItem("token");
  // const { data: user, isLoading } = useGetUser();
  if (isLoading) return <FullscreenLoader />;
  if (user && allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }
  if (!token) return <Navigate to="/login" replace />;
  return <Outlet />;
}

// props validation
ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.array,
};

export default ProtectedRoute;
