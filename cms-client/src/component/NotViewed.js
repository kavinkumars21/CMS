import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { notviewedcomplaints } from '../Store/Slice/NotViewedSlice';
import { UpdateView } from '../Store/Slice/UpdateView';
import { GetCategory } from '../Store/Slice/GetCategorySlice';

function NotViewed() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notviewedcomplaints());
    dispatch(GetCategory());
  }, []);

  const { notviewed } = useSelector((state) => state.notviewed);
  const { complaintCategory } = useSelector((state) => state.complaintCategory);

  const toggle = id => setdrop(drop === id ? undefined : id)

  const handlestatus = async (Id) => {
    const id = Id;
    dispatch(
      UpdateView({ id })
    );
  }

  const [drop, setdrop] = useState();

  const renderDropdowns = () => {
    return (
      complaintCategory?.length > 0 && complaintCategory.map((opt, i) => (
        <div key={i} value={opt}>
          <div className='flex bg-'>
            {opt.Type}
          </div>
        </div>
      ))
    )
  };

  return (
    <div className='flex flex-col gap-8 p-10'>
      <div>
        Complaints Not Viewed
      </div>
      <div>
        <table>
          <tr>
            <th className='border border-gray-800 p-3'>Raised by</th>
            <th className='border border-gray-800 p-3'>Raised on</th>
            <th className='border border-gray-800 p-3'>Type</th>
            <th className='border border-gray-800 p-3'>Complaint description</th>
            <th className='border border-gray-800 p-3'>Assign a worker</th>
          </tr>
          {
            notviewed.map((data, index) => (
              <tr>
                <td className='border border-gray-800 p-2'>{data.User.Name}</td>
                <td className='border border-gray-800 p-2'>{data.RaisedOn}</td>
                <td className='border border-gray-800 p-2'>{data.Type}</td>
                <td className='border border-gray-800 p-2'>{data.Description}</td>
                <td className='border border-gray-800 p-2'>
                  <div className='h-10'>
                    <div className='bg-slate-400 rounded-md flex px-3 py-1'>
                      <button onClick={(e) => toggle(data._id)}>Select</button>
                    </div>
                    <div>
                      {drop === data._id && renderDropdowns()}
                    </div>
                  </div>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  )
}

export default NotViewed
