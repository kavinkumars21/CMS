import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { inprogresscomplaints } from '../Store/Slice/InprogressSlice';

function Inprogress() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(inprogresscomplaints());
  }, []);

  const { inprogress } = useSelector((state) => state.inprogress);
  console.log(inprogress);

  return (
    <div className='flex flex-col gap-8 p-10'>
      <div>
        Complaints Inprogress
      </div>
      <div>
          <table>
            <tr>
              <th className='border border-gray-800 p-3'>Raised by</th>
              <th className='border border-gray-800 p-3'>Raised on</th>
              <th className='border border-gray-800 p-3'>Type</th>
              <th className='border border-gray-800 p-3'>Complaint description</th>
              <th className='border border-gray-800 p-3'>Status</th>
            </tr>
            {
              inprogress.map((data) => (
                <tr>
                    <td className='border border-gray-800 p-2'>{data.User.Name}</td>
                    <td className='border border-gray-800 p-2'>123456</td>
                    <td className='border border-gray-800 p-2'>{data.Type}</td>
                    <td className='border border-gray-800 p-2'>{data.Description}</td>
                    <td className='border border-gray-800 p-2'>
                    <button className='bg-blue-300 p-1 rounded-sm'>Mark as Completed</button>
                    </td>
                </tr>
               ))
             }
          </table>
        </div>
    </div>
  )
}

export default Inprogress
