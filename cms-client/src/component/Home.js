import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { complaintDetails } from '../Store/Slice/ComplaintDetails';

function Home() {

  const dispatch = useDispatch();

  const [type, setType] = useState();
  const [description, setDescription] = useState();

  const handleFormData = async (e) => {
    e.preventDefault();
    const ele = e.target.elements;
    const User = sessionStorage.getItem("USER");
    const Type = { type }.type;
    const Description = { description }.description;
    ele[0].value = "";
    ele[1].value = "";
    ele[2].value = "";
    ele[3].value = "";
    dispatch(
      complaintDetails({ User, Type, Description })
    );
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <form onSubmit={handleFormData} className='flex flex-col gap-4 p-8 border border-blue-300 rounded-md'>
        <div>
          <p>Your complaint is based on :</p>
          <input type='radio' id="Transport" value="TRANSPORT" name="type" onChange={e => setType(e.target.value)}></input>
          <label for="Transport">Transport</label><br></br>
          <input type='radio' id="Cleanliness" value="CLEANLINESS" name="type" onChange={e => setType(e.target.value)}></input>
          <label for="Cleanliness">Cleanliness</label><br></br>
          <input type='radio' id="Other" value="OTHER" name="type" onChange={e => setType(e.target.value)}></input>
          <label for="Other">Other</label><br></br>
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
  )
}

export default Home
