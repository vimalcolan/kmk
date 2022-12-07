import React,{useState} from 'react'
import DataTableComponent from '../Components/DataTable'
import Sidebar from '../Components/Layout/Sidebar';
import logo from '../assets/images/KMK.png';
import {RxHamburgerMenu} from 'react-icons/rx'
const Leads = () => {
  const[sidebar,setSidebar]=useState(false);
  const handleMenu=()=>{
    setSidebar(!sidebar)
}
  return (
    
      <div className='main-page'>
        <Sidebar sidebar={sidebar} handleMenu={handleMenu}/>
        <div className="mobile-header">
            <RxHamburgerMenu onClick={handleMenu}/>
            <div className='mobile-logo'>
              <img src={logo} alt="logo"/>
            </div>
          </div>
        <div className='page-content'>
      
          <div className='page-description d-flex justify-content-between align-items-center'>
            <div className='project-title d-flex'>
            
              <h5>Leads</h5>
            </div>
            <div className='search d-flex align-items-center'>
              <div className='custom-search me-2'>
                <input type="text" placeholder='Search' />
              </div>
             <div>
             <button className='btn-primary me-2'>+ Add New</button>
              <button className='btn-primary'>Assign to Admin</button>
             </div>
            </div>
          </div>
          <div className='data-table-component'>
            <DataTableComponent/>
          </div>
        </div>
      </div>
   
  )
}

export default Leads