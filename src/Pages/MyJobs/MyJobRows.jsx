import PropTypes from 'prop-types';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const JobRows = ({ job, idx, handleDelete }) => {

      const { _id, jobCategory, title, userName, userEmail, image, logo, salaryRange, postingDate, deadline, applicantsNumber, description } = job || {};

      return (
            <tr>
                  <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {idx + 1}
                  </td>
                  <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {title}
                  </td>

                  <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {postingDate}
                  </td>

                  <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {deadline}
                  </td>

                  <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {salaryRange}
                  </td>

                  {/* view details button */}
                  <td className='px-4 py-4 flex items-center gap-2'>

                        {/* delete button */}
                        <button onClick={() => handleDelete(_id)}>
                              <MdDeleteForever className='w-7 h-7 hover:text-red-500' title='Delete the job' />
                        </button>

                        {/* update button */}
                        <Link to={`/update-job/${_id}`}>
                              <button>
                                    <FaRegEdit className='w-6 h-6 hover:text-red-500' title='Update the Job' />
                              </button>
                        </Link>


                  </td>
            </tr>
      );
};

JobRows.propTypes = {
      job: PropTypes.object,
      idx: PropTypes.number
};

export default JobRows;