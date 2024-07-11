import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddAJob from "../Pages/AddAJob/AddAJob";
import AllJob from "../Pages/AllJob/AllJob";
import JobDetails from "../Pages/JobDetails/JobDetails";

const router = createBrowserRouter([
      {
            path: '/',
            element: <MainLayouts />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: '/add-a-job',
                        element: <AddAJob />
                  },
                  {
                        path: '/all-jobs',
                        element: <AllJob />
                  },
                  {
                        path: '/job-details/:id',
                        element: <JobDetails />
                  },
                  {
                        path: '/register',
                        element: <Register />
                  },
                  {
                        path: '/login',
                        element: <Login />
                  }
            ]
      }
])

export default router;