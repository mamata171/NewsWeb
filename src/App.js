import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

import Navbar from './components/Navbar'
import News from './components/News'
import NewsItem from './components/NewsItem'
import {BrowserRouter,Router, Routes, Route } from "react-router-dom"

export default class extends Component {
  render() {
    return (
     <>
     <Navbar/>
     {/* <News pageSize={10} country="in" category="general" /> */}
     <Routes>
          <Route exact path="/" element={<News key={"general"} pageSize={18} country="in" category="general" />} />
          <Route exact path="/business" element={<News key={"business"} pageSize={18} country="in" category="business" />} />
          <Route exact path="/sports" element={<News key={"sports"} pageSize={18} country="in" category="sports" />} />
          <Route exact path="/entertainment" element={<News key={"entern"} pageSize={18} country="in" category="entertainment" />} />
          <Route exact path="/health" element={<News key={"sdsd"} pageSize={18} country="in" category="health" />} />
          <Route exact path="/science" element={<News key={"sdff"} pageSize={18} country="in" category="science" />} />
          <Route exact path="/technology" element={<News key={"djkgj"} pageSize={18} country="in" category="technology" />} />
     </Routes>
     </>
    )
  }
}

{/* <Routes>
          <Route path="/" element={<News pageSize={10} country="in" category="general" />} />
          <Route path="/business" element={<News pageSize={10} country="in" category="business" />} />
          <Route path="/sports" element={<News pageSize={10} country="in" category="sports" />} />
          <Route path="/entertainment" element={<News pageSize={10} country="in" category="entertainment" />} />
          <Route path="/health" element={<News pageSize={10} country="in" category="health" />} />
          <Route path="/science" element={<News pageSize={10} country="in" category="science" />} />
          <Route path="/technology" element={<News pageSize={10} country="in" category="technology" />} />
     </Routes> */}

