import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { LoginData } from '../Store/Slice/LoginSlice';

function Login() {

    const dispatch = useDispatch();

    const handleLoginData = (e) => {
        e.preventDefault();
        const ele = e.target.elements;
        const RollNumber = ele[0].value;
        const Password = ele[1].value;
        ele[0].value = "";
        ele[1].value = "";
        dispatch(
            LoginData({ RollNumber, Password })
        );
    };

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

export default Login
