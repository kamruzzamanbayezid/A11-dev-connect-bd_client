import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContent } from "../../Provider/AuthProvider";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {

      const { createUser, profileUpdate } = useContext(AuthContent)

      const handleCreateUser = (e) => {
            e.preventDefault();

            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const photo = form.photo.value;

            // validation
            if (password.length < 6) {
                  return toast.error("Password should have at least 6 characters.");
            }
            else if (!/[A-Z]/.test(password)) {
                  return toast.error("Password should contain at least one uppercase letter.");
            }


            createUser(email, password)
                  .then(res => {

                        // update profile
                        profileUpdate(name, photo)
                              .then(() => {
                                    toast.success('user Created Successfully')
                                    window.location.reload();
                              })
                              .catch(error => {
                                    toast.error(error.message);
                                    console.log(error);
                              })

                  })
                  .catch(error => {
                        toast.error(error.message);
                  })
      }

      return (
            <div>
                  <div className="bg-[#244034] min-h-[35vh]">
                        <h1 style={{ fontFamily: 'Playpen Sans' }} className="text-center text-5xl pt-7 text-white font-light">Register</h1>
                        <p className="text-center mt-6 text-slate-200">Create an account & Start posting or hiring talents</p>
                  </div>
                  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 my-16">
                        <div className="lg:w-1/2 flex justify-center">
                              <img src="https://i.ibb.co/4NJXBMH/4934425.jpg" alt="" />
                        </div>
                        <div className="lg:w-1/2 flex items-center justify-center">


                              <div className="w-full  mx-auto p-4 dark:bg-gray-800 dark:border-gray-700">
                                    <form className="space-y-6 mb-5" onSubmit={handleCreateUser}>
                                          <h5 style={{ fontFamily: 'Playpen Sans' }} className="text-6xl font-medium text-center text-[#244034] dark:text-white">Create Account</h5>
                                          <div>
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                                <input type="text" name="name" id="name" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 placeholder:text-base py-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your name" required />
                                          </div>
                                          <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                <input type="email" name="email" id="email" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 placeholder:text-base py-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                          </div>
                                          <div>
                                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                                <input type="password" name="password" id="password" placeholder="Enter Your Password" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 placeholder:text-base py-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                          </div>
                                          <div>
                                                <label htmlFor="Photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Photo</label>
                                                <input type="url" name="photo" id="Photo" placeholder="Enter Your Photo URL" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                          </div>

                                          <button type="submit" className="w-full text-white bg-[#244034] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
                                    </form>

                                    <div className="text-base mt-3 text-center font-medium text-gray-500 dark:text-gray-300">
                                          Already have an account? <Link to='/login' className="text-[#244034] hover:no-underline underline dark:text-blue-500">Login</Link>
                                    </div>
                              </div>

                        </div>
                  </div>

                  <SocialLogin />
            </div>
      );
};

export default Register;