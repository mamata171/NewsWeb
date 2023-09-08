import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

constructor(){
    super();
    this.state = {    
        articles:[],
        loading:false,
        page:1,
    }
    console.log("this is constr");
}

async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7e097032efbb4869bc0c79dc47122666&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    console.log(parsedData.totalResults);
    
}

handleprevclick = async ()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7e097032efbb4869bc0c79dc47122666&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page:this.state.page-1,
        articles:parsedData.articles
    })

  
}

handlenextclick = async ()=>{
  if (this.state.page+1> Math.ceil(this.state.totalResults/20)){

  }
 else{
  console.log(this.state.totalResults);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=7e097032efbb4869bc0c79dc47122666&page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
        page:this.state.page+1,
        articles:parsedData.articles
    })
 }
 
  
}


  render() {
    return (
   
      <div className="container my-4">
           
          <h2>NewsWeb - Bussiness Top Headlines</h2>

         <div className="row">
          {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem title = {element.title} url = {element.url} description ={element.description?element.description.slice(0,100):" "} imageUrl = {element.urlToImage}></NewsItem>
              </div>
          })}
        </div>
          <div className="container d-flex justify-content-between">
             <button disabled={this.state.page<=1} type="button" className="btn btn-dark px-3" onClick={this.handleprevclick}>&#8592; Previous</button>
              <button type="button" className="btn btn-dark px-4" onClick={this.handlenextclick}>Next &#8594;</button>
        </div>

      </div>
    )
  }
}
