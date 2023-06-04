import { RouterProvider } from "react-router-dom";
import routes from "./router"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <div className="bg-[#282c34] h-screen">
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        
        <ToastContainer />
        
        <RouterProvider router={routes} />

    </div>
  );
}

export default App;
