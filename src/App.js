import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";

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
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/portfolio",
    element: <Portfolio/>,
  },
  {
    path: "/blogs",
    element: <Blog/>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
