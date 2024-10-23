import React, { useContext } from 'react';
import { AppContext } from '../../ContextProvider/ContextProvider';

const Profile = () => {
    const {user} = useContext(AppContext)
   
    return (
        <div>
            <h1 className=''>Profile</h1>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;