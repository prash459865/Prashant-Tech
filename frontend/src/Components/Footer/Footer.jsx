import React from 'react'
import './Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { SlSocialInstagram } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
    return (
        <div className='Footer-container'>
            <h2 className='companyname-in-footer'>Prashant Tech</h2>
            <div className='getintouch-quickLinks'>
                <div className='getIn-touch'>
                    <h3>Get In Touch</h3>
                    <span>
                        <FaLocationDot size={24} color='white' />
                        <p>B-1277/78/79, GD Colony, Mayur Vihar spanhase 3, New Delhi</p>
                    </span>
                    <span>
                        <IoMdCall size={24} color='white' />
                        <p>1234567898</p>
                    </span>
                    <span>
                        <IoMail size={24} color='white' />
                        <p>abc@gmail.com</p>
                    </span>
                </div>
                <div className='getIn-touch'>
                    <h3>Quick Links</h3>
                    <span>
                        <IoIosArrowRoundForward size={24} color='white' />
                        <p>Home</p>
                    </span>
                    <span>
                        <IoIosArrowRoundForward size={24} color='white' />
                        <p>Our Services</p>
                    </span>
                    <span>
                        <IoIosArrowRoundForward size={24} color='white'/>
                        <p>About US</p>
                    </span>
                </div>
                <div className='getIn-touch'>
                    <h3>Popular Links</h3>
                    <span>
                        <IoIosArrowRoundForward size={24} color='white' />
                        <p>Meet The Team</p>
                    </span>
                    <span>
                        <IoIosArrowRoundForward size={24} color='white' />
                        <p>Latset Blog</p>
                    </span>
                    <span>
                        <IoIosArrowRoundForward size={24} color='white'/>
                        <p>Contact Us</p>
                    </span>
                </div>
            </div>
            <p style={{ color: 'white', marginTop: '1rem' }}>© Prashant Tech. All Rights Reserved. Designed by Mendica Infotech Pvt. Ltd.</p>
        </div>
    )
}

export default Footer
