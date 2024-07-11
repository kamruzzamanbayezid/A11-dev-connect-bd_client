import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const SocialLogin = () => {

      const { googleLogin } = useAuth();

      const handleGoogleLogin = () => {
            googleLogin()
                  .then(() => {
                        toast.success('You Successfully Logged In')
                        window.location.reload();
                  })
                  .catch(error => {
                        toast.error(error.message)
                        console.log(error);
                  })
      }

      return (
            <div>
                  <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <span className="absolute text-3xl px-3 font-mono text-gray-900  bg-white dark:text-white dark:bg-gray-900">or</span>
                  </div>
                  <div className="flex justify-center">
                        <button onClick={handleGoogleLogin} type="button" className="text-[#244034]font-medium rounded-lg  px-5 py-2.5 text-center text-xl inline-flex items-center border border-[#244034] mr-2 mb-2">
                              <FcGoogle className="text-2xl mr-2"></FcGoogle>
                              Login with Google
                        </button>
                  </div>
            </div>
      );
};

export default SocialLogin;