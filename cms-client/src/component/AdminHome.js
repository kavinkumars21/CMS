import React, { useState } from 'react'
import NotViewed from './NotViewed';
import Inprogress from './Inprogress';

function AdminHome() {

    const [component, setComponent] = useState("NotViewed");

  return (
    <div className='min-h-screen'>
        <div className='flex gap-5 p-10'>
            <button className='border border-gray-800' onClick={() => setComponent("NotViewed")}>Complaints not viewed</button>
            <button className='border border-gray-800' onClick={() => setComponent("Inprogress")}>Complaints Inprogress</button>
        </div>
        <div>
            {component === "NotViewed" && <NotViewed />}
            {component === "Inprogress" && <Inprogress />}
        </div>
    </div>
  )
}

export default AdminHome
