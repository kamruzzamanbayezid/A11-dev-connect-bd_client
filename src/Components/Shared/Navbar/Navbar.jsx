import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";

const Navbar = () => {

      const { user, logOut } = useAuth();

      const handleLogOut = () => {
            logOut()
                  .then(() => {
                        toast.success('You Successfully Logged Out')
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      const NavLinks = <>

            <li className="text-lg font-normal">
                  <NavLink to="/" style={({ isActive }) => ({
                        color: isActive ? '#D2F34C' : '#FFF',
                  })}>
                        Home
                  </NavLink>
            </li>
            <li className="text-lg font-normal">
                  <NavLink to="/all-jobs" style={({ isActive }) => ({
                        color: isActive ? '#D2F34C' : '#FFF',
                  })}>
                        All Jobs
                  </NavLink>
            </li>
            {
                  user?.email &&
                  <li className="text-lg font-normal">
                        <NavLink to="/appliedJobs" style={({ isActive }) => ({
                              color: isActive ? '#D2F34C' : '#FFF'
                        })}>
                              Applied Jobs
                        </NavLink>
                  </li>
            }
            {
                  user?.email &&
                  <li className="text-lg font-normal">
                        <NavLink to="/add-a-job" style={({ isActive }) => ({
                              color: isActive ? '#D2F34C' : '#FFF'
                        })}>
                              Add a Job
                        </NavLink>
                  </li>
            }
            {
                  user?.email &&
                  <li className="text-lg font-normal">
                        <NavLink to="/my-jobs" style={({ isActive }) => ({
                              color: isActive ? '#D2F34C' : '#FFF'
                        })}>
                              My Jobs
                        </NavLink>
                  </li>
            }
            <li className="text-lg font-normal">
                  <NavLink to="/blogs" style={({ isActive }) => ({
                        color: isActive ? '#D2F34C' : '#FFF'
                  })}>
                        Blogs
                  </NavLink>
            </li>
            {
                  !user?.email &&
                  <li className="text-lg font-normal">
                        <NavLink to="/register" style={({ isActive }) => ({
                              color: isActive ? '#D2F34C' : '#FFF'
                        })}>
                              Register
                        </NavLink>
                  </li>
            }
            {
                  user?.email ?
                        <li onClick={handleLogOut} className="text-lg font-normal flex md:hidden">
                              <NavLink style={({ isActive }) => ({
                                    color: '#244034',
                                    backgroundColor: '#D2F34C',
                                    width: '100%',
                                    fontWeight: "bold",
                                    textAlign: "center"

                              })}>
                                    Log out
                              </NavLink>
                        </li>
                        :
                        <li className="text-lg font-normal flex md:hidden">
                              <NavLink to='login' style={({ isActive }) => ({
                                    color: '#244034',
                                    backgroundColor: '#D2F34C',
                                    width: '100%',
                                    fontWeight: "bold",
                                    textAlign: "center"

                              })}>
                                    Login
                              </NavLink>
                        </li>

            }


      </>


      return (
            <div className="bg-[#244034]">
                  <div className="navbar max-w-7xl mx-auto py-5">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 text-[#D2F34C] w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-[#244034] space-y-2 w-52">
                                          {NavLinks}
                                    </ul>
                              </div>
                              <Link to='/' className="logoStyle text-[#FFF] text-[30px]">DevConnect.BD</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="flex gap-5 items-center ">
                                    {NavLinks}
                              </ul>
                        </div>
                        <div className="navbar-end">

                              {
                                    user?.email ?
                                          <button onClick={handleLogOut} className="bg-[#D2F34C] text-[#244034] px-8 hover:bg-transparent hover:text-[#D2F34C] hover:border-2 hover:border-[#D2F34C] py-2 rounded-full text-xl font-medium hidden md:block">Log out</button>
                                          :
                                          <Link to='/login'>
                                                <button className="bg-[#D2F34C] text-[#244034] px-8 hover:bg-transparent hover:text-[#D2F34C] hover:border-2 hover:border-[#D2F34C] py-2 rounded-full text-xl font-medium hidden md:block">Login</button>
                                          </Link>
                              }
                              {
                                    user?.email && <div className="dropdown dropdown-end ml-2">
                                          <div tabIndex={0}>
                                                <img src={user.photoURL} className="w-12 h-12 rounded-full" />
                                          </div>
                                          <ul tabIndex={0} className="dropdown-content z-[1] p-3 shadow bg-base-100 rounded-box w-fit">
                                                <li><a className="text-[#E7AB3C] mb-2">{user.displayName}</a></li>
                                                <li><a className="text-[#E7AB3C]">{user.email}</a></li>
                                          </ul>
                                    </div>
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;