import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from "./Pages/Home"
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";


function App () {
const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/quiz",
    element:<Quiz/>
  },
  {
    path:"/result",
    element:<Result/>
  }
])


 return(
  <>
  <RouterProvider router={router}/>
  </>
 )
}

export default App;
