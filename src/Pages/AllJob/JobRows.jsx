import PropTypes from 'prop-types';
import { AiOutlineFundView } from "react-icons/ai";
import { Link } from 'react-router-dom';

const JobRows = ({ job, idx }) => {

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
                  <td className='px-4 py-4 '>
                        <Link to={`/job-details/${_id}`}>
                              <button>
                                    <AiOutlineFundView className='w-6 h-6 hover:text-red-500' title='View Details' />
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