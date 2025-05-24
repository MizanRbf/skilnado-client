import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomePage from "../Pages/HomePage";
import AddTask from "../Pages/AddTask";
import BrowseTasks from "../Pages/BrowseTasks";
import MyPostedTasks from "../Pages/MyPostedTasks";
import TaskDetails from "../Components/TaskDetails";
import Loader from "../Components/Loader";
import UpdateMyTask from "../Components/UpdateMyTask";
import BidForm from "../Components/BidForm";
import PrivateRoute from "../Provider/PrivateRoute";
import BidsDetails from "../Components/BidsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("https://skilnado-server.vercel.app/featuredTasks"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: HomePage,
      },
      {
        path: "/addTask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/browseTasks",
        loader: () => fetch("https://skilnado-server.vercel.app/tasks"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: BrowseTasks,
      },
      {
        path: "/browseTasks/:id",
        loader: ({ params }) =>
          fetch(`https://skilnado-server.vercel.app/tasks/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedTasks",
        element: (
          <PrivateRoute>
            <MyPostedTasks></MyPostedTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateMyTask/:id",
        loader: ({ params }) =>
          fetch(`https://skilnado-server.vercel.app/tasks/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <UpdateMyTask></UpdateMyTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/bidsDetails/:taskId",
        Component: BidsDetails,
      },
    ],
  },
  // AuthLayout
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  // ErrorPage
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
