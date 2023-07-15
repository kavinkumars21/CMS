import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { AdminLoginData } from '../Store/Slice/AdminLoginSlice';

function AdminLogin() {

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const { AdminLogin } = useSelector((state) => (state.AdminLoginData));

  const handleLoginData = async (e) => {
    e.preventDefault();
    const ele = e.target.elements;
    const Name = ele[0].value;
    const Password = ele[1].value;
    ele[0].value = "";
    ele[1].value = "";
    dispatch(
      AdminLoginData({ Name, Password })
    );
  };

  useEffect(() => {
    if (AdminLogin?.data?.response === "success") {
      Navigate("/admin");
    } else {
      console.log("wrong");
    }
  }, [AdminLogin]);

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <form onSubmit={handleLoginData}>
        <div className='grid gap-8 bg-blue-300 p-14 rounded-lg'>
          <input type="text" placeholder='Name' className='text-center h-10 rounded-lg' />
          <input type="password" placeholder='Password' className='text-center h-10 rounded-lg' />
          <div className='flex justify-center'>
            <button className='bg-blue-100 h-10 w-20 rounded-lg'>SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AdminLogin
