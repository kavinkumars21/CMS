import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { notviewedcomplaints } from '../Store/Slice/NotViewedSlice';
import { UpdateView } from '../Store/Slice/UpdateView';
import { GetCategory } from '../Store/Slice/GetCategorySlice';
import TableWithDropdowns from './Dropdown';

function NotViewed() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notviewedcomplaints());
    dispatch(GetCategory());
  }, []);

  const { notviewed } = useSelector((state) => state.notviewed);
  const { complaintCategory } = useSelector((state) => state.complaintCategory);

  const handlestatus = async (Id) => {
    const id = Id;
    dispatch(
      UpdateView({ id })
    );
  }

  const [selectedValues, setSelectedValues] = useState([]);
  const [MultilevelDD, setMultilevelDD] = useState(true);

  const handleDropdownChange = (index, value) => {
    const updatedValues = [...selectedValues];
    updatedValues[index] = value;
    setSelectedValues(updatedValues);
  };

  const renderDropdowns = () => {
    return complaintCategory?.length > 0 && complaintCategory.map((option, index) => (
      <select
        key={index}
        value={selectedValues[index] || ''}
        onChange={(e) => handleDropdownChange(index, e.target.value)}
      >
        <option value="">Select an option</option>
        {complaintCategory?.length > 0 && complaintCategory.map((opt, i) => (
          <option key={i} value={opt}>
            {opt.Type}
          </option>
        ))}
      </select>
    ));
  };

  return (
    <div className='flex flex-col gap-8 p-10'>
      <div>
        Complaints Not Viewed
      </div>
      <TableWithDropdowns />
      <div>{renderDropdowns()}</div>
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
            notviewed.map((data,index) => (
              <tr>
                <td className='border border-gray-800 p-2'>{data.User.Name}</td>
                <td className='border border-gray-800 p-2'>{data.RaisedOn}</td>
                <td className='border border-gray-800 p-2'>{data.Type}</td>
                <td className='border border-gray-800 p-2'>{data.Description}</td>
                <td className='border border-gray-800 p-2'>
                  <div>
                    <div>
                      <div className='bg-slate-400 rounded-md flex px-3 py-1'>
                        {/* <button className='flex items-center gap-2' onClick={() => setDropdown(data._id)}>
                          Choose a worker
                          <ion-icon name={`${open ? "chevron-down-outline" : "chevron-up-outline"}`}></ion-icon>
                        </button> */}

                      </div>
                      <div>
                        <div className="flex flex-col gap-1 absolute mt-[6px] bg-blue-200 shadow-2xl duration-700">
                          {
                            complaintCategory?.length > 0 && complaintCategory.map((data) => (
                              <div className='flex'>
                                <div>
                                  <button className='flex items-center gap-2 group hover:bg-slate-100 w-full h-5' onClick={() => setMultilevelDD(!MultilevelDD)}>
                                    {data.Type}
                                  </button>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                        <div className={`flex flex-col gap-1 mt-[-6px] bg-blue-200 shadow-2xl duration-700 min-w-fit ${MultilevelDD ? "hidden translate-x-0" : "translate-x-32 min-h-fit p-3"}`}>
                          <p>person 1</p>
                          <p>person 2</p>
                          <p>person 3</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <button className='bg-blue-300 p-1 rounded-sm' onClick={(e) => handlestatus(data._id)}>Mark as viewed and Inprogress</button> */}
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
