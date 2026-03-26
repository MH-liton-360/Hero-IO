import { createBrowserRouter } from "react-router";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Error from "../../Pages/Error/Error";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
            { index: true, Component: Home }
        ]
    },
    {
        path: "*",
        Component: Error
    }
])

export default Router;