import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./components/Signin";
import HomePage from "./components/HomePage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from 'socket.io-client';
import { BACKEND_URI } from "./components/constant/variables";
import { setSocket } from "./redux/socketSlicer";
import { setOnlineUsers } from "./redux/userSlicer";

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

function App() {
  let { authuser } = useSelector((store) => store?.user)
  let { socket } = useSelector((store) => store?.socket)
  let dispatch = useDispatch()


  useEffect(() => {
    if (authuser) {
      let socket = io(`${BACKEND_URI}`, {
        query: {
          userId: authuser?._id
        },
      })

      dispatch(setSocket(socket))

      socket.on("getOnlineUsers", (onlineUsers) => {
        dispatch(setOnlineUsers(onlineUsers))
      })

      return () => socket.close()   // jesehi es page ko chor ker jayga socket close
      // socket.close jo hai vo backend me socket.on("dissconnect") method hai vo call kerta hai

    } else {
      //  if user offline then we have to close socket
      if (socket) {
        socket.close()
        dispatch(setSocket(null))
      }
    }

  }, [authuser])

  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}

export default App;
