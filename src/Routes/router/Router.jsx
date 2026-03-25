import { createBrowserRouter } from "react-router";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        children: [
            { index: true, Component: Home }
        ]
    }
])

export default Router;