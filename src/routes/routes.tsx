import { createBrowserRouter } from "react-router-dom";

// project public routes
import Layout from "../layout";
import HomePage from "../pages/home";

const publicRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
];

export default createBrowserRouter(publicRoutes);
