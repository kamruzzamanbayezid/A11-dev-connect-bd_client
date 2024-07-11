import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";


const JobDetails = () => {

      const [jobDetails, setJobDetails] = useState({});
      const axios = useAxios();
      const { id } = useParams();

      const { jobCategory, title, userName, userEmail, image, logo, salaryRange, postingDate, deadline, applicantsNumber, description } = jobDetails || {};

      useEffect(() => {
            axios
                  .get(`/job/${id}`)
                  .then((data) => {
                        setJobDetails(data.data);
                  })
                  .catch((error) => {
                        toast.error("Error fetching job details:", error.message);
                  });

      }, [axios, id])



      return (
            <div className="bg-[#F5F7FA]">
                  <div className="  lg:p-0">
                        <div className=" mb-10 ">
                              <img
                                    src={image}
                                    alt="Your Image"
                                    className="w-full md:h-[70vh]"
                              />
                        </div>
                        <div className="max-w-7xl mx-auto pb-20 flex flex-col md:flex-row gap-6">
                              <div className="md:w-2/3">
                                    <div className="p-4  bg-white  rounded-lg shadow">
                                          <div className="flex pb-4 flex-col items-center md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                <img className="w-full rounded-t-lg h-40 md:h-auto md:w-40 md:rounded-none md:rounded-l-lg" src={logo} alt="" />
                                                <div className="flex flex-col justify-between p-4 leading-normal">
                                                      <p className='text-center md:text-start text-sm mb-1 text-[#AAB1B7] '>Posted by: {userName}</p>
                                                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                                      <div className="flex items-center gap-2">
                                                            <CiLocationOn className="text-2xl"></CiLocationOn>
                                                            <span className=' text-xl font-medium text-[#AAB1B7] mr-3 mt-1'>Dhaka, Bangladesh</span>

                                                      </div>
                                                </div>
                                          </div>
                                          <hr />
                                          <div className="pt-6">
                                                <div className="mb-6">
                                                      <h2 className="text-xl font-medium mb-3">Job Description</h2>
                                                      <p className="text-[#7A838B] text-sm">{description}</p>
                                                </div>
                                                <div>
                                                      <h2 className="text-xl font-medium mb-3">Responsibilities</h2>
                                                      <li className="text-[#7A838B] text-sm">The applicants should have experience in the following areas.</li>
                                                      <li className="text-[#7A838B] text-sm">Have sound knowledge of commercial activities.</li>
                                                      <li className="text-[#7A838B] text-sm">Leadership, analytical, and problem-solving abilities.</li>
                                                </div>
                                                <div className="my-6">
                                                      <h2 className="text-xl font-medium mb-3">Qualifications</h2>
                                                      <li className="text-[#7A838B] text-sm">Strong proficiency in web development languages and frameworks.</li>
                                                      <li className="text-[#7A838B] text-sm">Solid understanding of coding best practices.</li>
                                                      <li className="text-[#7A838B] text-sm">Proven track record of delivering high-quality.</li>
                                                </div>
                                          </div>

                                    </div>

                              </div>


                              <div className=" lg:w-2/6">

                                    <div className=" p-6 bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Job Summery
                                          </h5>
                                          <hr className="my-6" />
                                          <div>
                                                <li className="mb-3 text-[#AAB1B7]">Published on: <span className="text-[#001D38]">{postingDate}</span></li>
                                                <li className="text-[#AAB1B7] mb-3">Deadline: <span className="text-[#001D38]">{deadline}</span></li>
                                                <li className="text-[#AAB1B7] mb-3">Salary: <span className="text-[#001D38]">{salaryRange}</span></li>
                                                <li className="text-[#AAB1B7] mb-3">Job nature: <span className="text-[#001D38]">{jobCategory}</span></li>
                                                <li className="text-[#AAB1B7] mb-3">Applicants: <span className="text-[#001D38]">{applicantsNumber}</span></li>
                                          </div>

                                          <button
                                                className="w-full mt-4 text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium"
                                          >
                                                Apply now
                                          </button>
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default JobDetails;