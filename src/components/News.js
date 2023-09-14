import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner'
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps = {
      country:"in",
      category: "general",
      pageSize: 8
    }

    // static propTypes = {
    //   country:this.PropTypes.string,
    //   pageSize:this.PropTypes.number 
    // }
constructor(){
    super();
    this.state = {    
        articles:[],
        loading:false,
        page:1,
       
    }
    console.log("this is constr");
}



async updatepage(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7e097032efbb4869bc0c79dc47122666&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    console.log("inside update : ",this.state.page)
    this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false})
}


componentDidMount(){
  this.updatepage()
}

 handleprevclick = async()=>{
  await this.setState({page:this.state.page-1});
  this.updatepage()
  console.log(this.state.page);
}

 handlenextclick= async()=>{
  console.log(this.state.page);
  await this.setState({page:this.state.page+1});
  
  this.updatepage()
  console.log(this.state.page);
}

  render() {
    return (
   
      <div className="container my-4">
           
          <h2 className='text-center'>NewsWeb - Top Headlines - {this.props.heading}</h2>
          {/* this syntax displays spinner if loading is true */}
        
         <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem badge_color = {this.props.badge_color} title = {element.title} source = {element.source.name} author={element.author} date = {element.publishedAt} url = {element.url} description ={element.description?element.description.slice(0,100):" "} imageUrl = {element.urlToImage}></NewsItem>
              </div>
          })} 
        </div>
        {this.state.loading&&<Spinner/>} 

         {!this.state.loading && <div className="container d-flex justify-content-between">
             <button disabled={this.state.page<=1} type="button" className="btn btn-dark px-3" onClick={this.handleprevclick}>&#8592; Previous</button>
              <button disabled={(this.state.page+1> Math.ceil(this.state.totalResults/20))} type="button" className="btn btn-dark px-4" onClick={this.handlenextclick}>Next &#8594;</button>
        </div>}

        
      </div>
    )
  }
}
