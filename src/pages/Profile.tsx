import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function Profile() {
    const { user } = useContext(UserContext);
    return (
        <>
            <div>Profile</div>
            {user !== null &&
                <div>{user.display_name}</div>}
        </>
    );
}