import { createBrowserRouter } from "react-router";

import RootLayout from "../Layouts/RootLayouts/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import AddTask from "../Pages/Tasks/AddTask";
import BrowseTasks from "../Pages/Tasks/BrowseTasks";
import TaskDetails from "../Pages/Tasks/TaskDetails";
import MyPostedTasks from "../Pages/Tasks/MyPostedTasks";
import UpdateMyTask from "../Pages/Tasks/UpdateMyTask";
import BidsDetails from "../Pages/Bids/BidsDetails";
import AuthLayout from "../Layouts/Auth/AuthLayout";
import Login from "../Layouts/Auth/Login";
import Register from "../Layouts/Auth/Register";
import ErrorPage from "../Pages/Error/ErrorPage";
import Loader from "../shared/Loader";
import PrivateRoute from "../Provider/PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Blogs from "../Pages/Blogs/Blogs";

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

  // Blogs
  {
    path: "/blogs",
    hydrateFallbackElement: <Loader></Loader>,
    loader: () => fetch("/blogData.json"),
    element: <Blogs></Blogs>,
  },
  // Dashboard
  {
    path: "/dashboard",
    loader: () => fetch("https://skilnado-server.vercel.app/tasks"),
    hydrateFallbackElement: <Loader></Loader>,
    element: <Dashboard></Dashboard>,
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
