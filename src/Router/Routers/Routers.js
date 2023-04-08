import Main from "../../Layout/Main";
import Chackout from "../../Pages/Chackout/Chackout";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import SignUp from "../../Pages/SginUp/SignUp";
import ErrorPage from "../../Pages/Sheard/ErrorPage/ErrorPage";
import PriveatRoute from "../PriveatRoute/PriveatRoute";

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
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/chackout/:id',
                element:<PriveatRoute><Chackout></Chackout></PriveatRoute>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/orders',
                element:<PriveatRoute><Orders></Orders></PriveatRoute>
            }
        ]
       }
])
export default router;