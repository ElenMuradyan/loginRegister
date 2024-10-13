import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "./layouts/Main";
import "./styles/global.css";

const App=()=>{
  return (
    <RouterProvider router={
      createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Register/>}></Route>
             <Route path='login' element={<Login />}></Route>
             <Route path='register' element={<Register />}></Route>
          </Route>
        )
      )
  }/>
  )
}
export default App