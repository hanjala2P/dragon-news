import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import HomePage from "../Pages/HomePage";
import CategoryNews from "../Pages/CategoryNews";
import NewsDetails from "../Pages/NewsDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";


 const router =  createBrowserRouter([
    {
        path:'/',
        Component:Root,
        errorElement: <h1 className="text-center font-semibold mt-6">404 Page Not Found</h1>,
        hydrateFallbackElement: <h1 className="text-center font-semibold mt-6">Loading...</h1>,
        children:[
            {
                path:'/',
                Component:HomePage
             },
             {
                path:'/categoryNews/:id',
                Component:CategoryNews,
                loader:()=>fetch('/news.json'),
             },
             {
                path:'/newsDetails/:id',
                element: <NewsDetails />,
                loader: () => fetch("/news.json"),
             }
        ]
    },
    {
        path:'/auth',
        Component:AuthLayout,
        children:[
            {
                path:'/auth/login',
                Component:Login,
            },
            {
                path:'/auth/register',
                Component:Register,
            },
        ]
    },
    {
        path:'/news',
        element:<h1 className="text-center font-semibold mt-6">News Page</h1>
    },
    {
        path:'/*',
        element:<h1 className="text-center font-semibold mt-6">Error 404</h1>
    },


])
export default router;