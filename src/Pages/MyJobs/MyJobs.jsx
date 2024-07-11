import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MyJobRows from './MyJobRows';
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";

const MyJobs = () => {

      const [myJobs, setMyJobs] = useState([]);
      const { user } = useAuth();
      const userEmail = user?.email;
      const axios = useAxios()


      useEffect(() => {

            user?.email &&
                  axios
                        .get(`/my-jobs/${userEmail}`)
                        .then((data) => {
                              setMyJobs(data.data);
                        })
                        .catch((error) => {
                              toast.error(error.message);
                              console.log(error.message);
                        });
      }, [axios, userEmail, user?.email]);

      const handleDelete = (id) => {

            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {
                        axios.delete(`/job/${id}`)
                              .then(data => {
                                    if (data.data.deletedCount > 0) {
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "Your job has been deleted.",
                                                icon: "success"
                                          });
                                          const remaining = myJobs.filter(job => job._id !== id)
                                          setMyJobs(remaining)
                                    }
                              })
                              .catch(error => {
                                    toast.error(error.message);
                              })
                  }
            });
      }

      return (
            <div>

                  <div className="bg-[#244034] min-h-[35vh] flex items-center justify-center">
                        <h1 style={{ fontFamily: 'Playpen Sans' }} className="text-center text-5xl  text-white font-light">My Jobs</h1>
                  </div>
                  <div>
                        {
                              myJobs?.length === 0 ?
                                    <div className=" pt-10 pb-20">
                                          <div className="max-w-7xl flex items-center justify-center mx-auto h-[80vh]">
                                                <img className="h-full" src="https://i.ibb.co/3FVgSYq/3009287.jpg" alt="" />
                                          </div>
                                    </div>
                                    :

                                    <div className="bg-[#F5F7FA]">
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
                                                                                    myJobs?.map((job, idx) => <MyJobRows
                                                                                          key={job?._id}
                                                                                          job={job}
                                                                                          idx={idx}
                                                                                          handleDelete={handleDelete}
                                                                                    ></MyJobRows>)
                                                                              }
                                                                        </tbody>
                                                                  </table>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                        }
                  </div>
            </div>
      );
};

export default MyJobs;