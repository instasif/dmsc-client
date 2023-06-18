import { Outlet } from "react-router-dom";
import Nav from "../Pages/NavBar/Nav";
import Footer from "../Pages/Footer/Footer";

const Main = () => {
    return (
        <>
         <Nav />
         <Outlet />
         <Footer />   
        </>
    );
};

export default Main;