import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
 
const AdminRoutes = () => {

    const cookies = new Cookies();

    const token = cookies.get('jwt');

    return(
        token ? <Outlet/> : <Navigate to="/adminlogin"/>
    )
}

export default AdminRoutes
