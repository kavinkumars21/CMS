import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { complaintDetails } from '../Store/Slice/ComplaintDetails';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { GetCategory } from '../Store/Slice/GetCategorySlice';

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCategory());
  }, []);

  const { complaintCategory } = useSelector((state) => state.complaintCategory);
  console.log(complaintCategory);

  const [type, setType] = useState();
  const [description, setDescription] = useState();

  const date = moment().format('LLL');

  const handleFormData = async (e) => {
    e.preventDefault();
    const ele = e.target.elements;
    const User = sessionStorage.getItem("USER");
    const Type = { type }.type;
    const Description = { description }.description;
    const RaisedOn = { date }.date;
    dispatch(
      complaintDetails({ User, Type, Description, RaisedOn })
    );
  }

  return (
    <div className='min-h-screen'>
      <div className='flex justify-end p-10'>
        <Link to="/history" >Complaint history</Link>
      </div>
      <div className='flex justify-center align-middle mt-[8%]'>
        <form onSubmit={handleFormData} className='flex flex-col gap-4 p-8 border border-blue-300 rounded-md'>
          <div>
            <p>Your complaint is based on :</p>
            {
              complaintCategory?.length > 0 && complaintCategory.map((data) => (
                <div>
                  <input type='radio' id={data.Type} value={data.Type} name="type" onChange={e => setType(e.target.value)}></input>
                  <label for={data.Type}>{data.Type}</label><br></br>
                </div>
              ))
            }
          </div>
          <div className='grid gap-2'>
            <label>Description of the complaint :</label>
            <input type='text' placeholder='describe your complaint' onChange={e => setDescription(e.target.value)}
              className='border border-gray-600 rounded-[4px]'></input>
          </div>
          <div className='flex justify-between'>
            <button className='border border-gray-400 rounded-[4px]'>Submit</button>
            <input type='reset'></input>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
