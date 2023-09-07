import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className="container my-4 d-flex">
         <NewsItem title = "news abcd" description ="lorem epsum dollar sit emmit"></NewsItem>
         <NewsItem title = "news abcd" description ="lorem epsum dollar sit emmit"></NewsItem>
         <NewsItem title = "news abcd" description ="lorem epsum dollar sit emmit"></NewsItem>
      </div>
    )
  }
}
