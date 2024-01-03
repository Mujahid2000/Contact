
import { Navigate, useLocation } from 'react-router-dom';

import { Spinner } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';





const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(user, loading);
    console.log(user)

    if (loading)
        return<Spinner color="purple" aria-label="Purple spinner example" />


    if (user) {

        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};



export default PrivateRoute;