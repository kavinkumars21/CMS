import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { notviewedcomplaints } from '../Store/Slice/NotViewedSlice';
import { UpdateView } from '../Store/Slice/UpdateView';

function NotViewed() {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(notviewedcomplaints());
   }, []);

   const { notviewed } = useSelector((state) => state.notviewed);

   const handlestatus = async (Id) => {
      const id = Id;
      dispatch(
         UpdateView({ id })
      );
   }

   const [Dropdown, setDropdown] = useState(true);
   const [MultilevelDD, setMultilevelDD] = useState(true);

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
                  notviewed.map((data) => (
                     <tr>
                        <td className='border border-gray-800 p-2'>{data.User.Name}</td>
                        <td className='border border-gray-800 p-2'>{data.RaisedOn}</td>
                        <td className='border border-gray-800 p-2'>{data.Type}</td>
                        <td className='border border-gray-800 p-2'>{data.Description}</td>
                        <td className='border border-gray-800 p-2'>
                           <div>
                              <div>
                                 <div className='bg-slate-400 rounded-md flex px-3 py-1'>
                                    <button className='flex items-center gap-2' onClick={() => setDropdown(!Dropdown)}>
                                       Choose a worker
                                       <ion-icon name={`${Dropdown ? "chevron-down-outline" : "chevron-up-outline"}`}></ion-icon>
                                    </button>

                                 </div>
                                 <div>
                                    <div className={`bg-blue-200 shadow-2xl mt-1 ml-4 rotate-45 duration-700 ${Dropdown ? "h-0 w-0" : "h-3 w-3"}`}></div>
                                    <div className={`flex flex-col gap-1 absolute mt-[-6px] bg-blue-200 shadow-2xl duration-700 ${Dropdown ? "h-0 p-0" : "min-h-fit p-3"}`}>
                                       <div className='flex'>
                                          <button className='flex items-center gap-2 group hover:bg-slate-100 w-full h-5' onClick={() => setMultilevelDD(!MultilevelDD)}>
                                             techs
                                          </button>
                                       </div>
                                       <div>
                                          <button className='flex items-center gap-2 hover:bg-slate-100 w-full' onClick={() => setMultilevelDD(!MultilevelDD)}>
                                             cleaners
                                          </button>
                                       </div>
                                       <div>
                                          <button className='flex items-center gap-2 hover:bg-slate-100 w-full' onClick={() => setMultilevelDD(!MultilevelDD)}>
                                             management
                                          </button>
                                       </div>
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
