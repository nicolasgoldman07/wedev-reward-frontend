import React from 'react';

const HomeUserInfo = ({ currentUser }) => {
  return (
    <div className=''>
      {currentUser && (
        <div className='user-info-container'>
          <img
            src={process.env.PUBLIC_URL + '/userProfilePic.png'}
            alt=''
            className='user-profilePic'
          />
          <span className='user-fullName'>
            <span className='user-firstName'>{currentUser.firstName} </span>
            <span className='user-lastName'>{currentUser.lastName}</span>
          </span>
          <span className='user-username'>
            Username: {currentUser.username}{' '}
          </span>
        </div>
      )}
    </div>
  );
};

export default HomeUserInfo;
