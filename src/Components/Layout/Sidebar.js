import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/KMK.png';
import '../../assets/style.css'
import { sidebarData } from '../../Services/Services';
import {BsCaretDownFill} from 'react-icons/bs';
import {AiFillCaretLeft,AiFillCloseSquare} from 'react-icons/ai';
const Sidebar = ({sidebar,handleMenu}) => {
  return (
    <div  className={sidebar?"sidebar":"sidebar hide"}>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='profile d-flex justify-content-between'>
                <div className='description d-flex'>
                <div className='profile-pic'>
                   <span className='profile-image-bg'> <img alt='profile-pic'/></span>
                </div>
                <div className='profile-details'>
                    <h6>Ashish Kumar</h6>
                    <span>Admin</span>
                </div>
                </div>
                <div>
                    <span><BsCaretDownFill/></span>
                </div>
            </div>
            <div className='menu-items'>
                <ul>
                    {
                        sidebarData.map((e,i)=>{
                         return(
                            <li key={i}>
                          <Link to={e.path}>  <span className='icon'>{e.icon}</span><span className='menu-item'>{e.title}</span><span className='marker'><AiFillCaretLeft/></span> </Link></li>
                         )
                        })
                    }
                </ul>

            </div>
            <span className='sidebar-menu-icon' onClick={handleMenu}><AiFillCloseSquare/></span>
     
    </div>
  )
}

export default Sidebar