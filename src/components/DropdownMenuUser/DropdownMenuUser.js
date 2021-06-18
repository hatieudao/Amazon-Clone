import React from 'react';

import './DropdownMenuUser.css';
import { auth } from '../../fisebase'
import { useSelector } from 'react-redux';
function DropdownMenuUser() {

    const user = useSelector(state => state.user)
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="DropdownMenuUser">
            <ul className="DropdownMenuUser__Menu">
                <li>Profile</li>
                <li onClick={handleAuthentication}>Sign Out</li>
            </ul>
        </div>
    )
}

export default DropdownMenuUser
