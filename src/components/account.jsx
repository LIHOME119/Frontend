import React from 'react';
import '../App.css';
import Profile from './accountProfile'
  
function Account() {
  return (
    <>

    
       <h2 style={{ color: '#199cff' }}> My Account Profile</h2>
      <p style={{ color: '#002b30' }}> You can see your personal information here</p>
     
       <Profile />
    </>
  )
}
export default Account;