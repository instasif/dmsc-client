import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const Signin = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(() => {
        toast.success("Succesfully login");
        navigate(from, { replace: true });
      })
      .then((err) => {
        toast.error(err.message);
      });
console.log(email, password);
    //57-9
  };
  return (
    <div className="w-full max-w-sm mx-auto my-32 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Welcome Back
        </h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Login or create account
        </p>

        <form onSubmit={handleSubmit}>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              name="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />
          </div>

          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              name="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <p
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500 cursor-pointer"
            >
              Forget Password?
            </p>

            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>
      </div>

      <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">
          dont have an account?{" "}
        </span>

        <Link
          to={"/signup"}
          className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Signin;
