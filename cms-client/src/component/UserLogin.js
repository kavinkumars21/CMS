import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { UserLoginData } from '../Store/Slice/UserLoginSlice';

function UserLogin() {

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { UserLogin } = useSelector((state) => (state.UserLoginData));

  const UserId = UserLogin?.data?.data?._id;

  const handleLoginData = async (e) => {
    e.preventDefault();
    const ele = e.target.elements;
    const RollNumber = ele[0].value;
    const Password = ele[1].value;
    ele[0].value = "";
    ele[1].value = "";
    dispatch(
      UserLoginData({ RollNumber, Password })
    );
  };

  useEffect(() => {
    if (UserLogin?.data?.response === "success") {
      Navigate("/home");
      sessionStorage.setItem("USER", UserId);
    } else {
      console.log("wrong");
    }
  }, [UserLogin]);

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <form onSubmit={handleLoginData}>
        <div className='grid gap-8 bg-blue-300 p-14 rounded-lg'>
          <input type="text" placeholder='Roll No' className='text-center h-10 rounded-lg' />
          <input type="password" placeholder='Password' className='text-center h-10 rounded-lg' />
          <div className='flex justify-center'>
            <button className='bg-blue-100 h-10 w-20 rounded-lg'>SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserLogin
