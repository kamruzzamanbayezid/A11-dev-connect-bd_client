import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

const ErrorPage = () => {
      return (
            <div className="max-w-7xl mx-auto mt-10">
                  <Link to='/'>
                        <div className="flex items-center gap-2 rounded bg-[#D2F34C] w-fit py-2 px-10 text-black">
                              <span className="text-2xl font-medium">Back to home</span>
                              <FcHome className="text-3xl"></FcHome>
                        </div>
                  </Link>
                  <img className="max-h-[100vh] w-full object-cover" src="https://i.ibb.co/hBRjBBP/IMG-20231106-010043.jpg" alt="" />

            </div>
      );
};

export default ErrorPage;