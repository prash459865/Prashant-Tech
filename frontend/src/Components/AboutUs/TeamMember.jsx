import React from 'react'
import './AboutUs.css'
import team0 from '../../assets/team-0.jpg'
import team1 from '../../assets/team-1.jpg'
import team2 from '../../assets/team-2.jpg'
import team3 from '../../assets/team-3.jpg'

const teamMembers = [
    {
        name:'Nem Singh',
        post:'CEO',
        image:team0
    },
    {
        name:'Arvind Saini',
        post:'FRONT END DEVELOPER',
        image:team1
    },
    {
        name:'Mahesh Gupta',
        post:'BACK END DEVELOPER',
        image:team2
    },
    {
        name:'Vinay Singh',
        post:'PROJECT MANAGER',
        image:team3
    },

]


const TeamMember = () => {
  return (
    <div className='team-members-container'>
                <h2>TEAM MEMBERS</h2>
                <p style={{fontSize:"2rem"}}><strong>Professional Stuffs Ready to Help Your Business</strong></p>
                <div className='team-members'>
                    {teamMembers.map((member,index)=>(
                         <div key={index} className='particular-team-member'>
                            <img src={member.image} alt="" />
                            <p>{member.name}</p>
                            <p>{member.post}</p>
                         </div>
                    ))}
                </div>
            </div>
  )
}

export default TeamMember
