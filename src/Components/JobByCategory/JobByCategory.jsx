import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import './JobByCategory.css'
import JobCard from './JobCard';

const JobByCategory = () => {

      const axios = useAxios();
      const [jobByCategory, setJobByCategory] = useState([]);

      useEffect(() => {
            const onSiteJob = async () => {
                  try {
                        const response = await axios.get(`/all-jobs/OnSiteJob`);
                        setJobByCategory(response.data);

                  } catch (error) {
                        console.error('Error fetching jobs:', error);
                  }
            }
            onSiteJob()
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
            <div className='max-w-7xl mx-auto'>
                  <div className=''>
                        <Tabs>
                              <TabList className="react-tabs__tab-list">
                                    <Tab onClick={() => handleJobsByCategory('OnSiteJob')}>On Site Job</Tab>
                                    <Tab onClick={() => handleJobsByCategory('RemoteJob')}>Remote Job</Tab>
                                    <Tab onClick={() => handleJobsByCategory('Hybrid')}>Hybrid</Tab>
                                    <Tab onClick={() => handleJobsByCategory('PartTime')}>Part Time</Tab>
                              </TabList>

                              <TabPanel>
                                    {
                                          jobByCategory?.map((job) => <JobCard
                                                key={job?._id}
                                                job={job}
                                          ></JobCard>)
                                    }
                              </TabPanel>
                              <TabPanel>
                                    {
                                          jobByCategory?.map((job) => <JobCard
                                                key={job?._id}
                                                job={job}
                                          ></JobCard>)
                                    }
                              </TabPanel>
                              <TabPanel>
                                    {
                                          jobByCategory?.map((job) => <JobCard
                                                key={job?._id}
                                                job={job}
                                          ></JobCard>)
                                    }
                              </TabPanel>
                              <TabPanel>
                                    {
                                          jobByCategory?.map((job) => <JobCard
                                                key={job?._id}
                                                job={job}
                                          ></JobCard>)
                                    }
                              </TabPanel>


                        </Tabs>
                  </div>
            </div>
      );
};

export default JobByCategory;