
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import useAxios from '../../Hooks/useAxios';
import './JobByCategory.css'

const JobByCategory = () => {

      const axios = useAxios();
      const [allJobs, setAllJobs] = useState([]);
      const [jobByCategory, setJobByCategory] = useState([]);

      // all jobs
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

      // jobs by category
      const handleJobsByCategory = async (category) => {

            try {
                  const response = await axios.get(`/all-jobs/${category}`);
                  setJobByCategory(response.data);

            } catch (error) {
                  console.error('Error fetching jobs:', error);
            }
      };

      return (
            <div className='max-w-7xl mx-auto '>
                  <div className=''>
                        <Tabs>
                              <TabList className="react-tabs__tab-list">
                                    <Tab >All jobs</Tab>
                                    <Tab onClick={() => handleJobsByCategory('OnSiteJob')}>On Site Job</Tab>
                                    <Tab onClick={() => handleJobsByCategory('RemoteJob')}>Remote Job</Tab>
                                    <Tab onClick={() => handleJobsByCategory('Hybrid')}>Hybrid</Tab>
                                    <Tab onClick={() => handleJobsByCategory('PartTime')}>Part Time</Tab>
                              </TabList>

                              <TabPanel>
                                    {
                                          allJobs?.map((job) => (
                                                <div key={job._id} className='hover:shadow-md p-4 rounded-lg bg-[#FFF] my-6 flex flex-col md:flex-row justify-between items-center'>
                                                      <div className='flex flex-col md:flex-row  gap-6'>
                                                            <div className='flex items-center justify-center'>
                                                                  <img className='w-full md:w-40 h-32 md:h-full' src={job?.logo} alt="" />
                                                            </div>
                                                            <div className='space-y-5 '>
                                                                  <div className=''>
                                                                        <p className='text-center md:text-start text-sm mb-1 text-[#AAB1B7] '>Posted by: {job?.userName}</p>
                                                                        <p className='text-3xl text-center md:text-start mb-3 text-[#244034]'>{job?.title}</p>
                                                                  </div>
                                                                  <div className=''>
                                                                        <div className='flex justify-center md:justify-start'>
                                                                              <span className=' text-xl font-medium text-[#244034] mr-3 mt-1'>{job?.salaryRange}</span>
                                                                        </div>

                                                                        <div className='mt-4 flex flex-col mb-3  items-center md:items-start'>
                                                                              <p className=' text-[#AAB1B7] mr-3 mt-1'>Posting Date: {job?.postingDate}</p>
                                                                              <p className=' text-[#AAB1B7] mr-3 mt-1'>Deadline: {job?.deadline}</p>
                                                                        </div>

                                                                  </div>
                                                            </div>
                                                      </div>

                                                      <div className='md:pr-2 pb-6 md:pb-0 flex flex-col space-y-7'>
                                                            <span className='text-xl font-medium text-[#AAB1B7] '>Applicants: {job?.applicantsNumber}</span>

                                                            <Link to={`/jobDetails/${job._id}`}>
                                                                  <button className=" text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium ">View Details</button>
                                                            </Link>
                                                      </div>
                                                </div>
                                          ))
                                    }
                              </TabPanel>
                              <TabPanel>
                                    {
                                          jobByCategory?.map((job) => (
                                                <div key={job._id} className='hover:shadow-md p-4 rounded-lg bg-[#FFF] my-6 flex flex-col md:flex-row justify-between items-center'>
                                                      <div className='flex flex-col md:flex-row  gap-6'>
                                                            <div className='flex items-center justify-center'>
                                                                  <img className='w-full md:w-40 h-32 md:h-full' src={job?.logo} alt="" />
                                                            </div>
                                                            <div className='space-y-5 '>
                                                                  <div className=''>
                                                                        <p className='text-center md:text-start text-sm mb-1 text-[#AAB1B7] '>Posted by: {job?.userName}</p>
                                                                        <p className='text-3xl text-center md:text-start mb-3 text-[#244034]'>{job?.title}</p>
                                                                  </div>
                                                                  <div className=''>
                                                                        <div className='flex justify-center md:justify-start'>
                                                                              <span className=' text-xl font-medium text-[#244034] mr-3 mt-1'>{job?.salaryRange}</span>
                                                                        </div>

                                                                        <div className='mt-4 flex flex-col mb-3  items-center md:items-start'>
                                                                              <p className=' text-[#AAB1B7] mr-3 mt-1'>Posting Date: {job?.postingDate}</p>
                                                                              <p className=' text-[#AAB1B7] mr-3 mt-1'>Deadline: {job?.deadline}</p>
                                                                        </div>

                                                                  </div>
                                                            </div>
                                                      </div>

                                                      <div className='md:pr-2 pb-6 md:pb-0 flex flex-col space-y-7'>
                                                            <span className='text-xl font-medium text-[#AAB1B7] '>Applicants: {job?.applicantsNumber}</span>

                                                            <Link to={`/jobDetails/${job._id}`}>
                                                                  <button className=" text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium ">View Details</button>
                                                            </Link>
                                                      </div>
                                                </div>
                                          ))
                                    }
                              </TabPanel>
                              <TabPanel>
                                    {
                                          jobByCategory?.map((job) => (
                                                <div key={job._id} className='hover:shadow-md p-4 rounded-lg bg-[#FFF] my-6 flex flex-col md:flex-row justify-between items-center'>
                                                      <div className='flex flex-col md:flex-row  gap-6'>
                                                            <div className='flex items-center justify-center'>
                                                                  <img className='w-full md:w-40 h-32 md:h-full' src={job?.logo} alt="" />
                                                            </div>
                                                            <div className='space-y-5 '>
                                                                  <div className=''>
                                                                        <p className='text-center md:text-start text-sm mb-1 text-[#AAB1B7] '>Posted by: {job?.userName}</p>
                                                                        <p className='text-3xl text-center md:text-start mb-3 text-[#244034]'>{job?.title}</p>
                                                                  </div>
                                                                  <div className=''>
                                                                        <div className='flex justify-center md:justify-start'>
                                                                              <span className=' text-xl font-medium text-[#244034] mr-3 mt-1'>{job?.salaryRange}</span>
                                                                        </div>

                                                                        <div className='mt-4 flex flex-col mb-3  items-center md:items-start'>
                                                                              <p className=' text-[#AAB1B7] mr-3 mt-1'>Posting Date: {job?.postingDate}</p>
                                                                              <p className=' text-[#AAB1B7] mr-3 mt-1'>Deadline: {job?.deadline}</p>
                                                                        </div>

                                                                  </div>
                                                            </div>
                                                      </div>

                                                      <div className='md:pr-2 pb-6 md:pb-0 flex flex-col space-y-7'>
                                                            <span className='text-xl font-medium text-[#AAB1B7] '>Applicants: {job?.applicantsNumber}</span>

                                                            <Link to={`/jobDetails/${job._id}`}>
                                                                  <button className=" text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium ">View Details</button>
                                                            </Link>
                                                      </div>
                                                </div>
                                          ))
                                    }
                              </TabPanel>
                              <TabPanel>
                                    {
                                          jobByCategory?.map((job) => (
                                                <div key={job._id} className='hover:shadow-md p-4 rounded-lg bg-[#FFF] my-6 flex flex-col md:flex-row justify-between items-center'>
                                                      <div className='flex flex-col md:flex-row  gap-6'>
                                                            <div className='flex items-center justify-center'>
                                                                  <img className='w-full md:w-40 h-32 md:h-full' src={job?.logo} alt="" />
                                                            </div>
                                                            <div className='space-y-5 '>
                                                                  <div className=''>
                                                                        <p className='text-center md:text-start text-sm mb-1 text-[#AAB1B7] '>Posted by: {job?.userName}</p>
                                                                        <p className='text-3xl text-center md:text-start mb-3 text-[#244034]'>{job?.title}</p>
                                                                  </div>
                                                                  <div className=''>
                                                                        <div className='flex justify-center md:justify-start'>
                                                                              <span className=' text-xl font-medium text-[#244034] mr-3 mt-1'>{job?.salaryRange}</span>
                                                                        </div>

                                                                        <div className='mt-4 flex flex-col mb-3  items-center md:items-start'>
                                                                              <p className=' text-[#AAB1B7] mr-3 mt-1'>Posting Date: {job?.postingDate}</p>
                                                                              <p className=' text-[#AAB1B7] mr-3 mt-1'>Deadline: {job?.deadline}</p>
                                                                        </div>

                                                                  </div>
                                                            </div>
                                                      </div>

                                                      <div className='md:pr-2 pb-6 md:pb-0 flex flex-col space-y-7'>
                                                            <span className='text-xl font-medium text-[#AAB1B7] '>Applicants: {job?.applicantsNumber}</span>

                                                            <Link to={`/jobDetails/${job._id}`}>
                                                                  <button className=" text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium ">View Details</button>
                                                            </Link>
                                                      </div>
                                                </div>
                                          ))
                                    }
                              </TabPanel>
                              <TabPanel>
                                    {
                                          jobByCategory?.map((job) => (
                                                <div key={job._id} className='hover:shadow-md p-4 rounded-lg bg-[#FFF] my-6 flex flex-col md:flex-row justify-between items-center'>
                                                      <div className='flex flex-col md:flex-row  gap-6'>
                                                            <div className='flex items-center justify-center'>
                                                                  <img className='w-full md:w-40 h-32 md:h-full' src={job?.logo} alt="" />
                                                            </div>
                                                            <div className='space-y-5 '>
                                                                  <div className=''>
                                                                        <p className='text-center md:text-start text-sm mb-1 text-[#AAB1B7] '>Posted by: {job?.userName}</p>
                                                                        <p className='text-3xl text-center md:text-start mb-3 text-[#244034]'>{job?.title}</p>
                                                                  </div>
                                                                  <div className=''>
                                                                        <div className='flex justify-center md:justify-start'>
                                                                              <span className=' text-xl font-medium text-[#244034] mr-3 mt-1'>{job?.salaryRange}</span>
                                                                        </div>

                                                                        <div className='mt-4 flex flex-col mb-3  items-center md:items-start'>
                                                                              <p className=' text-[#AAB1B7] mr-3 mt-1'>Posting Date: {job?.postingDate}</p>
                                                                              <p className=' text-[#AAB1B7] mr-3 mt-1'>Deadline: {job?.deadline}</p>
                                                                        </div>

                                                                  </div>
                                                            </div>
                                                      </div>

                                                      <div className='md:pr-2 pb-6 md:pb-0 flex flex-col space-y-7'>
                                                            <span className='text-xl font-medium text-[#AAB1B7] '>Applicants: {job?.applicantsNumber}</span>

                                                            <Link to={`/jobDetails/${job._id}`}>
                                                                  <button className=" text-[#D2F34C] bg-[#244034] px-8 py-2 rounded hover:bg-transparent hover:border hover:border-[#244034] hover:text-[#244034] text-xl font-medium ">View Details</button>
                                                            </Link>
                                                      </div>
                                                </div>
                                          ))
                                    }
                              </TabPanel>


                        </Tabs>
                  </div>
            </div>
      );
};

export default JobByCategory;