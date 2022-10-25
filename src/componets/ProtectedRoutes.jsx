import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token = window.localStorage.getItem('token')
    const token1 = window.sessionStorage.getItem('token')
    
    if (token || token1) {
        return <Outlet />
    } else {
        return <Navigate to='/login' />
    }
};
export default ProtectedRoutes;