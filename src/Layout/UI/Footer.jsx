import React from 'react'
import '../../css/footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <img src="/src/Images/vogueHeading.png" alt='/src/Images/vogueHeading.png' />
      <p className='social'> <FaInstagram /> <FaXTwitter /> <FaFacebookF />  <FaPinterest /> </p>
      <p className='copyright'> All rights © are reserved </p>
    </div>
  )
}

export default Footer
