import { RouterProvider } from "react-router-dom";
import routes from "./router"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./shared/components/Spinner";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { fetchUser } from "./shared/store/slices/userSlice";

function App() {
  const [appLoading, setAppLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(()=> {

    try {

      fetchUser(dispatch);

    } finally{
      setAppLoading(false)
    }

  }, [])

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
        {
          appLoading ? <Spinner /> :
          <RouterProvider router={routes} />
        }

    </div>
  );
}

export default App;
