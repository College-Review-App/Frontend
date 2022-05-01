import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CollegeHomePage from './CollegeHomePage'
import Error404 from './Error404'
import HomePage from './HomePage'

//headquarters for all things navigation and routing
//use links for navigation
//useNavigate

const RouterHQ: React.VFC = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<HomePage/>}/>
       <Route path="/colleges/:collegeName" element={<CollegeHomePage/>}/>
       <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>
  )
}

export default RouterHQ