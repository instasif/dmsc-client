import { Link, Outlet } from "react-router-dom";
import Nav from "../Pages/NavBar/Nav";


const DashboardLayout = () => {
    return (
      <div>
        <Nav />
        <div className="drawer lg:drawer-open">
          <input id="dashboard-bar" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Outlet />
          </div>
          <div className="drawer-side">
            <label htmlFor="dashboard-bar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-100 text-base-content">
              <li>
                <Link to={"/dashboard/all-users"}>All Users</Link>
              </li>
              <li>
                <Link to={"/dashboard/all-admissions"}>All Admissions</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default DashboardLayout;