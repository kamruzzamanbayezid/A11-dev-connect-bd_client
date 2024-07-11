import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
import JobRows from "./JobRows";

const AllJobs = () => {

      const [allJobs, setAllJobs] = useState([]);
      const [inputValue, setInputValue] = useState("");
      const [filteredJobs, setFilteredJobs] = useState([]);
      const [isFiltered, setIsFiltered] = useState(false);


      const axios = useAxios()

      useEffect(() => {

            try {
                  axios.get('/all-jobs')
                        .then(data => {
                              setAllJobs(data.data);
                        })
            } catch (error) {
                  toast.error('Error fetching jobs:', error);
            }

      }, [axios])

      const handleSearch = () => {
            setFilteredJobs(
                  allJobs.filter((job) =>
                        job.title.toLowerCase().includes(inputValue.toLowerCase())
                  )
            );
            setIsFiltered(true);
      };

      return (
            <div className="bg-[#F5F7FA] pt-10 pb-20 p-4 lg:p-0">



                  <h5 style={{ fontFamily: 'Playpen Sans' }} className="text-6xl pt-6 mb-7 font-medium text-center text-[#244034] dark:text-white">All Jobs</h5>

                  <div className="flex justify-center px-4">

                        <input onChange={(e) => setInputValue(e.target.value)} className='rounded-l-lg lg:w-1/2 w-full h-14 text-[#0b0b0b66] bg-[#FFF] border border-solid border-[#DEDEDE] pl-4' type="text" placeholder="Search by job title...." />

                        <button onClick={handleSearch} className='bg-[#244034] text-[#D2F34C] rounded-r-lg  font-semibold py-4 px-7'>Search</button>
                  </div>

                  {/* tabular form */}
                  <div className='flex flex-col max-w-7xl mx-auto my-10 lg:my-20'>
                        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                    <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                          <table className='min-w-full divide-y divide-gray-200'>
                                                <thead className='bg-[#244034] text-[#D2F34C]'>
                                                      <tr>
                                                            <th></th>
                                                            <th
                                                                  scope='col'
                                                                  className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-[#D2F34C]'
                                                            >
                                                                  <div className='flex items-center gap-x-3'>
                                                                        <span className=" font-medium">Title</span>
                                                                  </div>
                                                            </th>

                                                            <th
                                                                  scope='col'
                                                                  className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-[#D2F34C]'
                                                            >
                                                                  <span>Posting Date
                                                                  </span>
                                                            </th>

                                                            <th
                                                                  scope='col'
                                                                  className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-[#D2F34C]'
                                                            >
                                                                  <button className='flex items-center gap-x-2'>
                                                                        <span>Deadline</span>
                                                                  </button>
                                                            </th>

                                                            <th
                                                                  scope='col'
                                                                  className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-[#D2F34C]'
                                                            >
                                                                  Salary range
                                                            </th>

                                                            <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-[#D2F34C]'>
                                                                  Actions
                                                            </th>
                                                      </tr>
                                                </thead>
                                                <tbody className='bg-white divide-y divide-gray-200 '>

                                                      {
                                                            isFiltered ?
                                                                  filteredJobs?.map((job, idx) => <JobRows
                                                                        key={job?._id}
                                                                        job={job}
                                                                        idx={idx}
                                                                  ></JobRows>)
                                                                  :
                                                                  allJobs?.map((job, idx) => <JobRows
                                                                        key={job?._id}
                                                                        job={job}
                                                                        idx={idx}
                                                                  ></JobRows>)
                                                      }


                                                </tbody>
                                          </table>
                                    </div>
                              </div>
                        </div>
                  </div>


                  {/* <div className="max-w-7xl mx-auto">
                        {isFiltered ?
                              filteredJobs?.map((job) => (
                                    <div key={job._id} className='hover:shadow-md p-4 rounded-lg bg-[#FFF] my-6 flex flex-col md:flex-row justify-between items-center'>
                                          <div className='flex flex-col md:flex-row  gap-6'>
                                                <div className='flex items-center rounded-lg justify-center'>
                                                      <img className='w-full rounded-lg md:w-40 h-32 md:h-full' src={job?.logo} alt="" />
                                                </div>
                                                <div className='space-y-5 py-6'>
                                                      <div className=''>
                                                            <p className='text-center md:text-start text-sm mb-1 text-[#AAB1B7] '>Posted by: {job?.userName}</p>
                                                            <p className='text-3xl text-center md:text-start mb-3 text-[#000]'>{job?.title}</p>
                                                      </div>
                                                      <div className=''>
                                                            <div className='flex justify-center md:justify-start'>
                                                                  <span className=' text-xl font-medium text-[#244034] mr-3 mt-1'>{job?.salaryRange}</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className='md:pr-2 pb-6 md:pb-0 flex flex-col space-y-7'>
                                                <div className='md:mt-4 flex flex-col mb-3  items-center md:items-start'>
                                                      <p className=' text-[#AAB1B7] mr-3 mt-1'>Posting Date: {job?.postingDate}</p>
                                                      <p className=' text-[#AAB1B7] mr-3 mt-1'>Deadline: {job?.deadline}</p>
                                                </div>

                                                <Link to={`jobDetails/${job._id}`}>
                                                      <button className=" text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium ">View Details</button>
                                                </Link>
                                          </div>
                                    </div>
                              ))
                              :
                              allJobs?.map((job) => (
                                    <div key={job._id} className='hover:shadow-md p-4 rounded-lg bg-[#FFF] my-6 flex flex-col md:flex-row justify-between items-center'>
                                          <div className='flex flex-col md:flex-row  gap-6'>
                                                <div className='flex items-center rounded-lg justify-center'>
                                                      <img className='w-full rounded-lg md:w-40 h-32 md:h-full' src={job?.logo} alt="" />
                                                </div>
                                                <div className='space-y-5 py-6'>
                                                      <div className=''>
                                                            <p className='text-center md:text-start text-sm mb-1 text-[#AAB1B7] '>Posted by: {job?.userName}</p>
                                                            <p className='text-3xl text-center md:text-start mb-3 text-[#000]'>{job?.title}</p>
                                                      </div>
                                                      <div className=''>
                                                            <div className='flex justify-center md:justify-start'>
                                                                  <span className=' text-xl font-medium text-[#244034] mr-3 mt-1'>{job?.salaryRange}</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className='md:pr-2 pb-6 md:pb-0 flex flex-col space-y-7'>
                                                <div className='md:mt-4 flex flex-col mb-3  items-center md:items-start'>
                                                      <p className=' text-[#AAB1B7] mr-3 mt-1'>Posting Date: {job?.postingDate}</p>
                                                      <p className=' text-[#AAB1B7] mr-3 mt-1'>Deadline: {job?.deadline}</p>
                                                </div>

                                                <Link to={`/jobDetails/${job._id}`}>
                                                      <button className=" text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium ">View Details</button>
                                                </Link>

                                          </div>
                                    </div>
                              ))
                        }
                  </div> */}
            </div>
      );
};

export default AllJobs;