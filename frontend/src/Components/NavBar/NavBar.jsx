import React from 'react'
import './NavBar.css'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const NavBar = ({setactive}) => {
    const navigate = useNavigate();
    return (
        <div className='navbar-container'>
            <div className='search-bar'>
                <CiSearch size={31} color='black' height="100%" style={{border:"1px solid black",borderRadius:"5px",backgroundColor:"white"}}/>
               <input placeholder='Search.....' type="search" />
            </div>
            <div className='logo-and-list'>
                <div>
                    <h2>Prashant Tech</h2>
                </div>

                <div className='navbaar-list'>
                    <ul>
                        <li onClick={()=>{setactive("");navigate('/')}}>Home</li>
                        <li onClick={()=>{setactive("About Us");navigate('/about-us')}}>About</li>
                        <li onClick={()=>{setactive("Services");navigate('/services')}}>Services</li>
                        <li onClick={()=>{setactive("Career");navigate('/Career')}}>Career</li>
                        <li onClick={()=>{setactive("Portfolio");navigate('/Portfolio')}}>Portfolio</li>
                        <li onClick={()=>{setactive("Blog");navigate('/blog')}}>Blog</li>
                        <li onClick={()=>{setactive("Pages");navigate('/Pages')}}>Pages</li>
                        <li onClick={()=>{setactive("Contact");navigate('/Contact')}}>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
