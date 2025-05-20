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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/addTask",
        Component: AddTask,
      },
      {
        path: "/browseTasks",
        loader: () => fetch("http://localhost:3000/tasks"),
        Component: BrowseTasks,
      },
      {
        path: "/myPostedTasks",
        Component: MyPostedTasks,
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
