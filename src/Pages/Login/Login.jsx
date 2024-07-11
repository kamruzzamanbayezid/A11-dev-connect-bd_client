import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Login = () => {

      const { login } = useAuth()
      const location = useLocation();
      const navigate = useNavigate();


      const handleLogin = (e) => {
            e.preventDefault();

            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;

            // validation
            if (password.length < 6) {
                  return toast.error("Password should have at least 6 characters.");
            }
            else if (!/[A-Z]/.test(password)) {
                  return toast.error("Password should contain at least one uppercase letter.");
            }

            login(email, password)
                  .then(res => {
                        toast.success('You Successfully Logged In')
                        // navigate(location.state ? location.state : '/')
                        // window.location.reload();
                        console.log(res);
                  })
                  .catch(error => {
                        toast.error(error.message);
                  })
      }


      return (

            <div className="w-full md:w-9/12 md:mx-auto my-16 mx-auto p-4 dark:bg-gray-800 dark:border-gray-700">

                  <form className="space-y-6 mb-5" onSubmit={handleLogin}>
                        <h5 style={{ fontFamily: 'Playpen Sans' }} className="text-6xl font-medium text-center text-[#244034] dark:text-white">Hi, Welcome Back!</h5>
                        <div className="text-lg text-center font-medium text-gray-500 dark:text-gray-300">
                              Do not have an account? <Link to="/register" className="text-[#244034] hover:no-underline underline dark:text-blue-500">Create account</Link>
                        </div>
                        <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 placeholder:text-base text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                              <input type="password" name="password" id="password" placeholder="Enter Your Password" className="bg-gray-50 placeholder:text-base border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>

                        <button type="submit" className="w-full text-white bg-[#244034] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>

                  </form>

                  <SocialLogin />

            </div>

      );
};

export default Login;