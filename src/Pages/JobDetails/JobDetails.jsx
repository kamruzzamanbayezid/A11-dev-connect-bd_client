import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";


const JobDetails = () => {

      const [jobDetails, setJobDetails] = useState({});
      const axios = useAxios();
      const { id } = useParams();
      const { user } = useAuth()

      const [loggedUser, setLoggedUser] = useState(user?.displayName);
      const [loggedEmail, setLoggedEmail] = useState(user?.email);
      const [resumeLink, setResumeLink] = useState('');
      // const [hasApplied, setHasApplied] = useState(false);

      const { jobCategory, title, userName, userEmail, image, logo, salaryRange, postingDate, deadline, applicantsNumber, description } = jobDetails || {};

      // current date
      const currentDate = new Date();

      // validation for apply
      const isDeadlinePassed = new Date(deadline) < currentDate;
      const matchUser = userEmail === user?.email

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

      const handleApplyJob = () => {
            document.getElementById("apply-modal").showModal();
      }

      const handleSubmitJob = (e) => {
            e.preventDefault();

            const formData = {
                  // jobId: id,
                  jobCategory,
                  title,
                  loggedUser,
                  loggedEmail,
                  resumeLink,
                  logo,
                  salaryRange,
                  postingDate,
                  deadline,
            };

            // apply for a job
            axios.post('/applied-jobs', formData)
                  .then(data => {
                        console.log(data.data);
                        if (data.data.insertedId) {

                              Swal.fire({
                                    title: "Good job!",
                                    text: "Successfully added the job!",
                                    icon: "success"
                              });

                              // axios
                              //       .put(`/allJobs/singleJobs/${id}`, { applicantsNumber: applicantsNumber + 1 })
                              //       .then((data) => {
                              //             if (data.status === 200) {
                              //                   Swal.fire({
                              //                         title: "Good job!",
                              //                         text: "Successfully added the job!",
                              //                         icon: "success"
                              //                   });

                              //                   // update in the ui
                              //                   axios.get(`/allJobs/singleJobs/${id}`).then((data) => {
                              //                         setJobDetails(data.data);
                              //                   });
                              //             }
                              //       })
                              //       .catch((error) => {
                              //             toast.error(error.message);
                              //       });

                        }
                        else {
                              toast.error('You Already Apply for this job')
                        }
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })

      }

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
                                                onClick={handleApplyJob}
                                                className="w-full mt-4 text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium"
                                          >
                                                Apply now
                                          </button>

                                          {/* Modal part */}

                                          <dialog id="apply-modal" className="modal">
                                                <div className="modal-box w-11/12 max-w-5xl">


                                                      <div className="w-full  mx-auto p-4 dark:bg-gray-800 dark:border-gray-700">
                                                            <h5 style={{ fontFamily: 'Playpen Sans' }} className="text-4xl font-medium text-center text-[#244034] dark:text-white">Apply for the job</h5>
                                                            <form onSubmit={handleSubmitJob} className="space-y-6 mb-5">

                                                                  <div>
                                                                        <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                                                        <input
                                                                              value={loggedUser}
                                                                              onChange={(e) => setLoggedUser(e.target.value)}
                                                                              type="text" name="user_name" id="user_name" className="bg-gray-50 border border-gray-300 placeholder:text-base text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                                                  </div>
                                                                  <div>
                                                                        <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                                                        <input
                                                                              value={loggedEmail}
                                                                              onChange={(e) => setLoggedEmail(e.target.value)}
                                                                              type="email" name="user_email" id="user_email" className="bg-gray-50 placeholder:text-base border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                                                  </div>
                                                                  <div>
                                                                        <label htmlFor="resumeLink" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resume Link</label>
                                                                        <input
                                                                              value={resumeLink}
                                                                              onChange={(e) => setResumeLink(e.target.value)}
                                                                              type="text" name="resume_Link" id="resumeLink" className="bg-gray-50 border border-gray-300 placeholder:text-base text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter the URL of your resume" />
                                                                  </div>


                                                                  <button type="submit" className="w-full text-white bg-[#244034] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                                                            </form>
                                                      </div>

                                                      <div className="modal-action">
                                                            <form method="dialog">
                                                                  <button className="btn">Close</button>
                                                            </form>
                                                      </div>
                                                </div>
                                          </dialog>
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default JobDetails;