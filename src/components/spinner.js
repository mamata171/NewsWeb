import React, { Component } from 'react'
import loader from './loader.gif'
import "./css/spinner_css.css"
export default class Spinner extends Component {
  render() {
    return (
      <div className="spinner-container">
        <img src={loader} alt="loading" width={"50px"}/>
      </div>
    )
  }
}
