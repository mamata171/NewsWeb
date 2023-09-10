import React, { Component } from 'react'

export default class NewsItem extends Component {


  render() {
    let {title,description,url,imageUrl,author,date} = this.props;
    return (
        <div className="container my-2">
        <div className="card">                      
            <img src={imageUrl?imageUrl:"https://www.pewresearch.org/journalism/wp-content/uploads/sites/8/2016/07/PJ_2016.07.07_Modern-News-Consumer_0-01.png"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p class="card-text my-2 mt-1"><small class="text-body-secondary">By {author?author:"Unknown"} on {date}</small></p>
                <a href={url} className="btn btn-dark btn-sm">Read More</a>
            </div>                      
            </div>
      </div>
    )
  }
}
