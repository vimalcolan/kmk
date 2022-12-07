import React from 'react'
import ProjectTracking from '../Pages/ProjectTracking'
import Leads from '../Pages/Leads'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const RoutesComponent = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProjectTracking/>} />
        <Route path='/leads' element={<Leads/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RoutesComponent