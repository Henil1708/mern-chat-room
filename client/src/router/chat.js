import AddRoom from "../pages/Chat/AddRoom";
import EditRoom from "../pages/Chat/EditRoom";
import Landing from "../pages/Chat/Landing";
import RoomPage from "../pages/Chat/RoomPage";


const chatRoutes = [
    {
        path: "",
        children: [
            {
                path: "",
                element:<Landing />
            },
            {
                path: "/room/add",
                element: <AddRoom />
            },
            {
                path: "/room/:roomId/edit",
                element: <EditRoom />
            },
            {
                path: "/room/:roomId",
                element: <RoomPage />
            }
        ]
    }
    
]

export default chatRoutes;