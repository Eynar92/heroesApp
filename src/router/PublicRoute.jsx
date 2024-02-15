import { useContext } from 'react'
import { AuthContext } from '../auth';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {

    const { logged } = useContext(AuthContext);

    return (!logged)
        ? <Outlet />
        : <Navigate to={'/marvel'} />
}
