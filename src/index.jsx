import "./index.css"
import ReactDom from "react-dom/client";
import Header from "./component/header/Header";
import Body from "./component/body/Body";
import Footer from "./component/footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";
import HomeCard from "./homeCard/HomeCard";

const ParagraphElement = <p className="bg-green-500"> World</p>






const Applayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,         
        children:
            [

                {
                    path: "/offer",
                    element: <Body />
                },
                {
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/home",
                    element: <Home />
                }
                            
           ]
        

    }

])

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)