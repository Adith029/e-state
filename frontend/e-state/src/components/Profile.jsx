import React from 'react';
import '../styles/Profile.css';

const Profile = () => {
    return (
        <div className="profileContainerUnique">
            <img src="profile-pic.jpg" alt="Profile" className="profilePicUnique" />
            <h1 className="nameUnique">John Doe</h1>
            <p className="emailUnique">john.doe@example.com</p>
        </div>
    );
};

export default Profile;
