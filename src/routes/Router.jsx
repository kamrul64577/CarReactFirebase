import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayouts from "../layouts/DashboardLayouts";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import CarsDetails from "../pages/CarsDetails";
import AllCars from "../pages/dashboard/AllCars";
import AddCarForm from "../pages/dashboard/AddCarForm";
import EditCar from "../components/dashboard/EditCar";
import AboutUs from "../pages/AboutUs.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:3000/cars'),
      },
      {
        path: "/product/:id",
        element: <CarsDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/cars/${params.id}`),

      },
      {
        path: "/about-us",
        element: <AboutUs/>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
  },

  {
    path: "dashboard",
    element: <DashboardLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <PrivateRoute> <Dashboard/> </PrivateRoute>
      },
      {
        path: "dashboard/all-cars",
        element: <PrivateRoute> <AllCars /> </PrivateRoute>
      },
      {
        path: "dashboard/add-car",
        element: <PrivateRoute> <AddCarForm/> </PrivateRoute>
      },
      {
        path: "/dashboard/edit-car/:id",
        element: <PrivateRoute> <EditCar/> </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:3000/cars/${params.id}`),

      },
    ]
  },
]);