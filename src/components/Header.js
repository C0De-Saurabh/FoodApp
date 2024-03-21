import React, { useState } from 'react';
import logoimg from './logo.png'
import UseOnlineStatus from '../utils/useOnlineStatus';
const UpperBar = () => {

  const[reactBtnlog,setBtnlog] = useState("Log-In")


    return(
      <div className='Header'>
        <img alt='Logo' className="Logo" src = {logoimg}/>
        <div className='NavItems'>
          <ul>
            <li>Online Status {UseOnlineStatus?" : 🟢":" : 🔴"}</li>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Cart</li>
            < button class="login-button" onClick={ () => {reactBtnlog==="Log-In"?setBtnlog("Log-Out"):setBtnlog("Log-In");}} > { reactBtnlog}</button>
          </ul>
        </div>
      </div>
    )
  }

export default UpperBar;