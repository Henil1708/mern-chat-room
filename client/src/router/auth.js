import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

const authRouter = [
    {
        path: "",
        children:[
            {
                path: "signin",
                element: <Login />
            },
            {
                path: "signup",
                element: <Signup />
            },
        ]
    }
]

export default authRouter;