import { RouterProvider } from "react-router-dom";
import routes from "./router"
function App() {
  return (
    <div className="bg-[#282c34] h-screen">
        <RouterProvider router={routes} />
    </div>
  );
}

export default App;
