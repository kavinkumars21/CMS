import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { SolverLoginData } from '../Store/Slice/SolverLoginSlice';

function SolversLogin() {

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  
  const { SolverLogin } = useSelector((state) => (state.SolverLoginData));

  const SolverId = SolverLogin?.data?.data?._id;

  const handleLoginData = async (e) => {
    e.preventDefault();
    const ele = e.target.elements;
    const EmpId = ele[0].value;
    const Password = ele[1].value;
    ele[0].value = "";
    ele[1].value = "";
    dispatch(
      SolverLoginData({ EmpId, Password })
    );
  };

  useEffect(() => {
    if (SolverLogin?.data?.response === "success") {
      Navigate("/solver");
      sessionStorage.setItem("SOLVER", SolverId);
    } else {
      console.log("wrong");
    }
  }, [SolverLogin]);

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <form onSubmit={handleLoginData}>
        <div className='grid gap-8 bg-blue-300 p-14 rounded-lg'>
          <input type="text" placeholder='Emp Id' className='text-center h-10 rounded-lg' />
          <input type="password" placeholder='Password' className='text-center h-10 rounded-lg' />
          <div className='flex justify-center'>
            <button className='bg-blue-100 h-10 w-20 rounded-lg'>SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SolversLogin
