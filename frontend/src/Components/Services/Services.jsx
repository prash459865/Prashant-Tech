import React from 'react'
import './Services.css'

const services = [
    {
        heading:'DIGITAL MARKETING',
        data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, vero, amet incidunt delectus, dolores ut alias in similique tempora iusto illum blanditiis. Qui quo quis dolore architecto impedit deserunt odio!"
    },
    {
        heading:'E-COMMERCE SOLUTIONS',
        data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, vero, amet incidunt delectus, dolores ut alias in similique tempora iusto illum blanditiis. Qui quo quis dolore architecto impedit deserunt odio!"
    },
    {
        heading:'WEB DEVELOPMENT',
        data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, vero, amet incidunt delectus, dolores ut alias in similique tempora iusto illum blanditiis. Qui quo quis dolore architecto impedit deserunt odio!"
    },
    {
        heading:'APP DEVELOPMENT',
        data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, vero, amet incidunt delectus, dolores ut alias in similique tempora iusto illum blanditiis. Qui quo quis dolore architecto impedit deserunt odio!"
    },
    {
        heading:'CUSTOM SOLUTION',
        data: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, vero, amet incidunt delectus, dolores ut alias in similique tempora iusto illum blanditiis. Qui quo quis dolore architecto impedit deserunt odio!"
    },
]

const Services = () => {
    return (
        <div className='services-component'>
            <div className='services-box'>
                <h2>OUR SERVICES</h2>
                <p style={{marginBottom:'3rem',fontSize:'1.8rem'}}>
                    <strong>Custom IT And Digital Marketing Solutions <br /> for Your Successful Business</strong>
                </p>
                <div className='services-container'>
                    {
                    services.map((service,index)=>(
                        <div key={index} className='particular-service'>
                           <h3>{service.heading}</h3>
                           <p>{service.data}</p>
                        </div>
                    ))
                   }
                </div>
                <div>
                    <h2>PRICING PLANS</h2>
                    <p style={{marginBottom:'3rem',fontSize:'1.8rem'}}><strong>We are Offering Competitive Prices <br /> for Our Clients</strong></p>
                    <div className='pricing-plans-container'>
                        <div className='particular-plan'>
                            <h3>Basic Plan</h3>
                        </div>
                        <div className='particular-plan'>
                             <h3>Standard Plan</h3>
                        </div>
                        <div className='particular-plan'>
                            <h3>Premium Plan</h3>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    )
}

export default Services
