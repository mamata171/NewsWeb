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
          <Route exact path="/" element={<News key={"general"} pageSize={18} country="in" category="general" badge_color="success"  heading="General"/>} />
          <Route exact path="/business" element={<News key={"business"} pageSize={18} country="in" category="business" badge_color="danger" heading="Bussiness"/>} />
          <Route exact path="/sports" element={<News key={"sports"} pageSize={18} country="in" category="sports" badge_color="warning" heading="Sports"/>} />
          <Route exact path="/entertainment" element={<News key={"entern"} pageSize={18} country="in" category="entertainment" badge_color="info" heading="Entertainment"/>} />
          <Route exact path="/health" element={<News key={"sdsd"} pageSize={18} country="in" category="health" badge_color="success" heading="Health"/>} />
          <Route exact path="/science" element={<News key={"sdff"} pageSize={18} country="in" category="science" badge_color="danger" heading="Science"/>} />
          <Route exact path="/technology" element={<News key={"djkgj"} pageSize={18} country="in" category="technology" badge_color="dark" heading="Technology"/>} />
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

