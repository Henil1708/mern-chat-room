import {createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import ChatLayout from "../layouts/ChatLayout";
import { checkAuth, checkLogin } from "../utils/loaders/auth";
import authRouter from "./auth";
import chatRoutes from "./chat";
import Error404 from "../pages/Errors/Error404";

// Creating a new instance of the BrowserRouter with the given routes
const routes = createBrowserRouter([
  {
    // The base path for the route
    path: "/",
    id: "root",
    // error page
    errorElement: <Error404 />,
    // Child routes that will be rendered inside the root layout
    children: [
        // Route for the home page
        {
            path: "/",
            loader: checkAuth,
            element: <ChatLayout />,
            children: [...chatRoutes]
        },
        //Route for the auth page
        { 
            path: "auth", 
            loader: checkLogin,
            element:  <AuthLayout />,
            children: [...authRouter]
        },
    ],
  },
]);

// Exporting the created router instance
export default routes;