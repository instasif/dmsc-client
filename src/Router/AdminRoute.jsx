import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Componants/Spinner/Spinner";
import { useAdmin } from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);

  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Spinner />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/signin"} state={{ from: location }} replace />;
};

export default AdminRoute;
