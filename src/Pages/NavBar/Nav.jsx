import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from 'react-router-dom';
import logo from "../../assets/photos/dmsc_logo-removebg.png"
import { useAdmin } from "../../Hooks/useAdmin";

const Nav = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin] = useAdmin(user?.email);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const signOut = () =>{
    logOut().then(() => {})
  }

  const items = (
    <>
      <Link to={"/"} className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
        Home
      </Link>
      <Link
        className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
        to={"/teachers"}
      >
        Teachers
      </Link>
      <Link
        className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
        to={"/admission"}
      >
        Admission
      </Link>
      <Link
        className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
        to={"/contact"}
      >
        Contact
      </Link>

      {isAdmin && (
        <Link
          className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
          to={"/dashboard"}
        >
          Dashboard
        </Link>
      )}

      {user?.uid ? (
        <button
          className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
          to={"/signin"}
          onClick={() => signOut()}
        >
          Signout
        </button>
      ) : (
        <Link
          className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
          to={"/signin"}
        >
          Signin
        </Link>
      )}
    </>
  );
  
  return (
    <nav className="relative bg-gray-50 shadow h-[100px]">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link className="">
            <img
              className="w-auto h-16 md:h-[80px] lg:h-[80px]"
              src={logo}
              alt="school logo"
            />
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center gap-6 lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 16h16"
                    />
                  </svg>
                </div>
              ) : (
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              )}
            </button>

            <label htmlFor="dashboard-bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                />
              </svg>
            </label>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">{items}</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
