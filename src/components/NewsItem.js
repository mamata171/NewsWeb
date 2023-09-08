import React, { Component } from 'react'

export default class NewsItem extends Component {


  render() {
    let {title,description,url,imageUrl} = this.props;
    return (
        <div className="container my-2">
        <div className="card" style={{width:"20rem"}}>                      
            <img src={imageUrl?imageUrl:"https://www.pewresearch.org/journalism/wp-content/uploads/sites/8/2016/07/PJ_2016.07.07_Modern-News-Consumer_0-01.png"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-dark btn-sm">Read More</a>
            </div>                      
            </div>
      </div>
    )
  }
}
