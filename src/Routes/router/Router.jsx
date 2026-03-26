import { createBrowserRouter } from "react-router";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Error from "../../Pages/Error/Error";
import Apps from "../../Pages/Apps/Apps";
import Installation from "../../Pages/Installation/Installation";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
            { index: true, Component: Home },
            { path: "apps", Component: Apps },
            { path: "installation", Component: Installation },
        ]
    },
    {
        path: "*",
        Component: Error
    }
])

export default Router;