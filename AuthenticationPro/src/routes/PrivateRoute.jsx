import React, { useContext } from 'react';
import { AppContext } from '../ContextProvider/ContextProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AppContext);
    if(user){
        return children;
    }
    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;
