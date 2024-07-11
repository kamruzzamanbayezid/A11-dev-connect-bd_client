import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {

      const NavLinks = <>

            <li className="text-lg font-normal">
                  <NavLink to="/" style={({ isActive }) => ({
                        color: isActive ? '#D2F34C' : '#FFF',
                  })}>
                        Home
                  </NavLink>
            </li>
            <li className="text-lg font-normal">
                  <NavLink to="/allJobs" style={({ isActive }) => ({
                        color: isActive ? '#D2F34C' : '#FFF',
                  })}>
                        All Jobs
                  </NavLink>
            </li>

            <li className="text-lg font-normal">
                  <NavLink to="/appliedJobs" style={({ isActive }) => ({
                        color: isActive ? '#D2F34C' : '#FFF'
                  })}>
                        Applied Jobs
                  </NavLink>
            </li>


            <li className="text-lg font-normal">
                  <NavLink to="/addAJob" style={({ isActive }) => ({
                        color: isActive ? '#D2F34C' : '#FFF'
                  })}>
                        Add a Job
                  </NavLink>
            </li>


            <li className="text-lg font-normal">
                  <NavLink to="/myJobs" style={({ isActive }) => ({
                        color: isActive ? '#D2F34C' : '#FFF'
                  })}>
                        My Jobs
                  </NavLink>
            </li>

            <li className="text-lg font-normal">
                  <NavLink to="/blogs" style={({ isActive }) => ({
                        color: isActive ? '#D2F34C' : '#FFF'
                  })}>
                        Blogs
                  </NavLink>
            </li>

            <li className="text-lg font-normal">
                  <NavLink to="/register" style={({ isActive }) => ({
                        color: isActive ? '#D2F34C' : '#FFF'
                  })}>
                        Register
                  </NavLink>
            </li>



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
                              <Link to='/login'>
                                    <button className="bg-[#D2F34C] text-[#244034] px-8 hover:bg-transparent hover:text-[#D2F34C] hover:border-2 hover:border-[#D2F34C] py-2 rounded-full text-xl font-medium hidden md:block">Login</button>
                              </Link>

                        </div>
                  </div>
            </div>
      );
};

export default Navbar;