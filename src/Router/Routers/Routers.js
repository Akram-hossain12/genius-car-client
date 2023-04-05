import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/Sheard/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
       {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
       }
])
export default router;