import { createBrowserRouter } from "react-router";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Error from "../../Pages/Error/Error";
import Installation from "../../Pages/Installation/Installation";
import AllApps from "../../Pages/AllApps/AllApps";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
            { index: true, Component: Home },
            { path: "all-apps", Component: AllApps },
            { path: "installation", Component: Installation },
        ]
    },
    {
        path: "*",
        Component: Error
    }
])

export default Router;