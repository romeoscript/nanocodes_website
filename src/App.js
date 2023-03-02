import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import FAQ from "./pages/FAQ";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration/>,
  },
  {
    path: "/faqs",
    element: <FAQ/>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
