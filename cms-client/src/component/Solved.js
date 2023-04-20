import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { solvedcomplaints } from '../Store/Slice/SolvedComplaints';
import moment from 'moment';

function Solved() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(solvedcomplaints());
    }, []);

    const { solved } = useSelector((state) => state.solved);

    const Date = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(Date);

    return (
        <div className='flex flex-col gap-8 p-10'>
            <div>
                Solved Complaints
            </div>
            <div>
                <table>
                    <tr>
                        <th className='border border-gray-800 p-3'>Raised by</th>
                        <th className='border border-gray-800 p-3'>Raised on</th>
                        <th className='border border-gray-800 p-3'>Type</th>
                        <th className='border border-gray-800 p-3'>Complaint description</th>
                    </tr>
                    {
                        solved.map((data) => (
                            <tr>
                                <td className='border border-gray-800 p-2'>{data.User.Name}</td>
                                <td className='border border-gray-800 p-2'>{data.createdAt}</td>
                                <td className='border border-gray-800 p-2'>{data.Type}</td>
                                <td className='border border-gray-800 p-2'>{data.Description}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Solved
