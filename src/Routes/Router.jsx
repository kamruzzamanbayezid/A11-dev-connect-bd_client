import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddAJob from "../Pages/AddAJob/AddAJob";
import AllJob from "../Pages/AllJob/AllJob";
import JobDetails from "../Pages/JobDetails/JobDetails";
import MyJobs from "../Pages/MyJobs/MyJobs";
import UpdateJob from "../Pages/MyJobs/UpdateJob";
import ErrorPage from "../Pages/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayouts />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/add-a-job',
                        element: <PrivateRoute><AddAJob /></PrivateRoute>
                  },
                  {
                        path: '/all-jobs',
                        element: <AllJob />
                  },
                  {
                        path: '/job-details/:id',
                        element: <PrivateRoute><JobDetails /></PrivateRoute>
                  },
                  {
                        path: '/my-jobs',
                        element: <PrivateRoute><MyJobs /></PrivateRoute>
                  },
                  {
                        path: '/applied-jobs',
                        element: <PrivateRoute><AppliedJobs /></PrivateRoute>
                  },
                  {
                        path: '/update-job/:id',
                        element: <PrivateRoute><UpdateJob /></PrivateRoute>
                  },
                  {
                        path: '/register',
                        element: <Register />
                  },
                  {
                        path: '/login',
                        element: <Login />
                  },
                  {
                        path: '/blogs',
                        element: <Blog />
                  }
            ]
      }
])

export default router;