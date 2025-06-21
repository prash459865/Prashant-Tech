import React from 'react'
import './ContactAndLocationContainers.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
const ContactAndLocationContainers = () => {
    return (
        <div className='ContactAndLocationContainers'>
            <div className='left-container'>
                <span>
                    <FaLocationDot size={22} color='white' style={{ marginRight: '5px' }} />
                    B-1277/78/79, GD Colony, Mayur Vihar phase 3, New Delhi
                </span>
                <span>
                    <IoMdCall size={24} color='white' style={{ marginRight: '5px' }} />
                    1234567898
                </span>
                <span>
                    <IoMail size={24} color='white' style={{ marginRight: '5px' }} />
                    abc@gmail.com
                </span>
            </div>
            <div className='right-container'>
                <span><SlSocialInstagram size={22} color='white'  /></span>
                <span><CiFacebook size={28} color='white'  /></span>
                <span><CiLinkedin  size={28} color='white'/></span>
            </div>
        </div>
    )
}

export default ContactAndLocationContainers
