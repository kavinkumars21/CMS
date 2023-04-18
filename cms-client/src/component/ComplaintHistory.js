import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { complainthistory } from '../Store/Slice/HistorySlice';

function ComplaintHistory() {

  const dispatch = useDispatch();

  const user = sessionStorage.getItem("USER");

  useEffect(() => {
    dispatch(complainthistory({ user }));
  }, []);

  const { history } = useSelector((state) => state.history);
  console.log(history);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-8'>
      <div>
        ComplaintHistory
      </div>
      <div>
          <table>
            <tr>
              <th className='border border-gray-800 p-3'>Type</th>
              <th className='border border-gray-800 p-3'>Raised on</th>
              <th className='border border-gray-800 p-3'>Complaint description</th>
              <th className='border border-gray-800 p-3'>Viewed the complaint</th>
              <th className='border border-gray-800 p-3'>On progress</th>
              <th className='border border-gray-800 p-3'>Completed</th>
            </tr>
            {
              history.map((data) => (
                <tr key={data}>
                  <td className='border border-gray-800 p-2'>{data.Type}</td>
                  <td className='border border-gray-800 p-2'>{data.createdAt}</td>
                  <td className='border border-gray-800 p-2'>{data.Description}</td>
                  <td className='border border-gray-800 p-2 text-center'>✔️</td>
                  <td className='border border-gray-800 p-2 text-center'>✔️</td>
                  <td className='border border-gray-800 p-2 text-center'>✔️</td>
                </tr>
              ))
            }
          </table>
        </div>
    </div>
  )
}

export default ComplaintHistory
