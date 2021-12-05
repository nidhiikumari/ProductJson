import React from 'react'
import { BrowserRouter as Router, Link,Routes, Route, } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'

function Apple3() {
  return (
    <div className="Appa">
      <Router>
       <Nav/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>

    </div>
  );
}


function PageNotFound() {
  return(
    <div>
      <h1>404 Page</h1>
      <p>This page is not found</p>
    </div>
  )
}


export default Apple3;