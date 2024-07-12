import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

const AppliedJobs = () => {

      const axios = useAxios()
      const { user } = useAuth();
      const [appliedJobs, setAppliedJobs] = useState([]);
      const [selectedCategory, setSelectedCategory] = useState('');


      useEffect(() => {
            user?.email &&
                  axios.get(`/applied-jobs?loggedEmail=${user?.email}`)
                        .then((data) => {
                              setAppliedJobs(data.data)
                        })
                        .catch(error => {
                              toast.error(error.message)
                              console.log(error.message);
                        })
      }, [axios, user?.email])


      const handleCategoryChange = (event) => {
            setSelectedCategory(event.target.value);
      };

      const filteredJobs = selectedCategory
            ? appliedJobs.filter(job => job.jobCategory === selectedCategory)
            : appliedJobs;



      return (
            <div>
                  <div className="bg-[#244034] min-h-[35vh] flex justify-center items-center">
                        <div>
                              <h1 style={{ fontFamily: 'Playpen Sans' }} className="text-center text-5xl  text-white font-light">Job You Applied</h1>

                              <select value={selectedCategory} onChange={handleCategoryChange} className="block mt-6 w-full  mx-auto p-2 rounded-md text-[#244034] text-xl font-medium bg-[#D2F34C] border-transparent focus:border-gray-500 focus:bg-white focus:ring-0">
                                    <option value="">Select Job by Category</option>
                                    <option value="OnSiteJob">On Site Job</option>
                                    <option value="RemoteJob">Remote Job</option>
                                    <option value="Hybrid">Hybrid</option>
                                    <option value="PartTime">Part Time</option>
                              </select>
                        </div>
                  </div>

                  <div className="max-w-7xl mx-auto my-16">
                        {
                              filteredJobs.length === 0 ?
                                    <div className="max-w-7xl flex items-center justify-center mx-auto h-[80vh]">
                                          <img className="h-full" src="https://i.ibb.co/3FVgSYq/3009287.jpg" alt="" />
                                    </div>
                                    :
                                    <div className="grid gap-6 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                          {
                                                filteredJobs?.map(job =>

                                                      <div key={job?._id} className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                                            <div className="flex flex-col py-5 items-center pb-10">
                                                                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={job?.logo} alt="Bonnie image" />

                                                                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{job?.title}</h5>
                                                                  <span className="text-sm text-gray-500 dark:text-gray-400">{job?.jobCategory}</span>
                                                                  <span className="text-base text-gray-500 dark:text-gray-900 mt-2">{job?.salaryRange}</span>

                                                            </div>
                                                      </div>

                                                )
                                          }
                                    </div>
                        }

                  </div>
            </div>
      );
};

export default AppliedJobs;