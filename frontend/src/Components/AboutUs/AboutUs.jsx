import React from 'react'
import './AboutUs.css'
import { LuCircleCheckBig } from "react-icons/lu";
import { SlCallOut } from "react-icons/sl";
import aboutus_image from '../../assets/about_us.jpg'
import TeamMember from './TeamMember';

const AboutUs = () => {
    return (
        <div className='AboutUs-container'>
            <div className='about-us-and-right-image' >
                <div className='About-us-details'>
                    <h4 style={{ fontSize: "1.5rem" }}>ABOUT US</h4>
                    <h2 style={{ fontSize: "2rem" }}>The Best IT Solution With 3 Years of Experience</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam fuga eaque incidunt quos, et deserunt ad sapiente qui quis labore quia dolor ea, eum accusamus quam non aspernatur esse.
                        Commodi, aspernatur. Vel aliquam omnis odit recusandae dolore ad rerum non, necessitatibus quod saepe esse eveniet enim ullam eos! Accusantium cum eaque vitae fuga ea. A tenetur amet ratione optio.
                    </p>

                    <ul>
                        <li>
                            <LuCircleCheckBig />
                            <strong>Award Winning</strong>
                        </li>
                        <li>
                            <LuCircleCheckBig />
                            <strong>24/7 Support</strong>
                        </li>
                        <li>
                            <LuCircleCheckBig />
                            <strong>Professional Staff</strong>
                        </li>
                        <li>
                            <LuCircleCheckBig />
                            <strong>Fair Prices</strong>
                        </li>
                    </ul>

                    <div className='calling-number-box'>
                        <SlCallOut size={30} />
                        <div className='calling-number'>
                            <p>Call Now</p>
                            <p>+91 665286826856</p>
                        </div>
                    </div>
                </div>
                <div className='image-at-right-side'>
                    <img src={aboutus_image} alt="" />
                </div>
            </div>
            <TeamMember/>
        </div>
    )
}

export default AboutUs
