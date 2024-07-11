import { MdLocationOn } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";

const ContactUs = () => {
      return (
            <div className="max-w-7xl pb-20 mx-auto">
                  <h5 style={{ fontFamily: 'Playpen Sans' }} className="text-6xl pt-20 mb-5 font-medium text-center text-[#244034] dark:text-white">Contact Us</h5>
                  <p className="w-full mx-auto text-center md:w-3/4 lg:w-1/2 text-lg font-medium text-gray-500 pb-12">If you have any questions or would like to inquire about our services, feel free to get in touch with us. We are here to help!</p>

                  <div className="flex gap-6 flex-col p-3 lg:p-0 lg:flex-row">
                        <div className="lg:w-3/5">
                              <form >

                                    <textarea id="message" rows="8" className="block p-4 w-full text-sm text-gray-900 bg-{#FFF} border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>

                                    <div>
                                          <div className="my-6 flex gap-4 flex-col lg:flex-row">

                                                <input type="text" id="base-input" className="bg-[#FFF] border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" />

                                                <input type="email" id="base-input" className="bg-[#FFF] border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" />
                                          </div>

                                          <input type="text" id="base-input" className="bg-[#FFF] border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Subject" />

                                    </div>
                                    <button className="w-full mt-8 hover:text-[#D2F34C] bg-transparent px-8 py-2 rounded hover:bg-[#244034] border border-[#244034] text-[#244034] text-xl font-medium"
                                    >
                                          Send Message
                                    </button>

                              </form>
                        </div>

                        <div className="lg:w-2/5">
                              <div className="mb-10">
                                    <h3 className="text-2xl mb-2 font-bold">Address:</h3>
                                    <div className="flex gap-3 items-center">
                                          <span><MdLocationOn className="text-2xl text-[#D2F34C]"></MdLocationOn></span>
                                          <div className="">
                                                <p className="text-lg text-gray-500 font-medium">123 Kalipur Street</p>
                                                <p className="text-lg text-gray-500 font-medium">Islampur, Muslimpara</p>
                                                <p className="text-md text-gray-500 font-medium">Dhaka, Bangladesh</p>
                                          </div>
                                    </div>
                              </div>

                              <div className="my-10">
                                    <h3 className="text-2xl mb-2 font-bold">Email:</h3>
                                    <div className="flex gap-3 items-center">
                                          <span><SiMinutemailer className="text-2xl text-[#D2F34C]"></SiMinutemailer></span>
                                          <div className="">
                                                <p className="text-lg text-gray-500 font-medium">kamruzzamanbayezid07@gmail.com</p>
                                                <p className="text-lg text-gray-500 font-medium">kmbayezid955@gmail.com</p>
                                          </div>
                                    </div>
                              </div>

                              <div className="mt-10 pb-10">
                                    <h3 className="text-2xl mb-2 font-bold">Phone:</h3>
                                    <div className="flex gap-3 items-center">
                                          <span><AiFillPhone className="text-2xl text-[#D2F34C]"></AiFillPhone></span>
                                          <div className="">
                                                <p className="text-lg text-gray-500 font-medium">+123 456 7890</p>
                                                <p className="text-lg text-gray-500 font-medium">01882888860</p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default ContactUs;