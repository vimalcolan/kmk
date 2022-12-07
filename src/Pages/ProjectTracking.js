import React, { useState } from 'react'
import Sidebar from '../Components/Layout/Sidebar'
import Accordion from 'react-bootstrap/Accordion';
import { IoMdAddCircleOutline } from 'react-icons/io'
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import TabsComponent from '../Components/Tabs';
import logo from '../assets/images/KMK.png';
import {RxHamburgerMenu} from 'react-icons/rx'
const ProjectTracking = () => {
  const[sidebar,setSidebar]=useState(false);
  const handleMenu=()=>{
    setSidebar(!sidebar)
}
  return (
    <div>
      <div className='main-page'>
        <Sidebar  sidebar={sidebar} handleMenu={handleMenu}/>
        <div className="mobile-header">
            <RxHamburgerMenu onClick={handleMenu}/>
            <div className='mobile-logo'>
              <img src={logo} alt="logo"/>
            </div>
          </div>
        <div className='page-content'>
          <div className='page-description d-flex justify-content-between align-items-center'>
            <div className='project-title'>
              <h5>Project Tracking</h5>
              <div>
                <span className='project-id'>006676</span>
                <span className='project-name'>Project Tracking</span>
              </div>
            </div>

            <div className='search d-flex align-items-center'>
              <div className='custom-search me-2'>
                <input type="text" placeholder='Search' />
              </div>
              <button className='btn-primary'>+ Add New</button>
            </div>
          </div>
          <div className='accordion-content'>
            <Accordion defaultActiveKey="3" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header  ><span className='accordion-icon'><IoMdAddCircleOutline /><IoMdRemoveCircleOutline /></span> Client information</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header><span className='accordion-icon'><IoMdAddCircleOutline /><IoMdRemoveCircleOutline /></span>Event Information</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header><span className='accordion-icon'><IoMdAddCircleOutline /><IoMdRemoveCircleOutline /></span>KMK Information</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header><span className='accordion-icon'><IoMdAddCircleOutline /><IoMdRemoveCircleOutline /></span>Budget Information</Accordion.Header>
                <Accordion.Body>
                  <TabsComponent />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header><span className='accordion-icon'><IoMdAddCircleOutline /><IoMdRemoveCircleOutline /></span>Gallery</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectTracking