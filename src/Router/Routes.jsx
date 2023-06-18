import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Signup from "../Shared/Signup/Signup";
import Signin from "../Shared/Signin/Signin";
import Admission from "../Pages/Admission/Admission";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminRoute from "./AdminRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AllAdmissions from "../Pages/Dashboard/AllAdmissions/AllAdmissions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/admission",
        element: (
          <PrivateRoute>
            <Admission />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <AdminRoute>
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      </AdminRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-admissions",
        element: (
          <AdminRoute>
            <AllAdmissions />
          </AdminRoute>
        ),
      },
    ],
  },
]);
