import React from 'react'

const UserInfo = ({ user }) => {
  return (
    <div className=''>
      <div className='user-info-container'>
        <img
          src={process.env.PUBLIC_URL + '/userProfilePic.png'}
          alt=''
          className='user-profilePic'
        />
        <span className='user-fullName'>
          <span className='user-firstName'>{user.firstName} </span>
          <span className='user-lastName'>{user.lastName}</span>
        </span>
        <span className='user-username'>Username: {user.username} </span>
      </div>
    </div>
  )
}

export default UserInfo
