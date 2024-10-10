import Register from "./pages/Register";
import Login from "./pages/Login";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "./layouts/Main";

const App=()=>{
  return (
    <RouterProvider router={
      createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<MainLayout />}>
             <Route path='login' element={<Login />}></Route>
             <Route path='register' element={<Register />}></Route>
          </Route>
        )
      )
  }/>
  )
}
export default App