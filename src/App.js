import React from 'react'
import './App.css'
import SearchPage from './pages/SearchPage.js'
import MyReads from './pages/MyReads.js'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/create" component={SearchPage} />
        <Route exact path="/" component={MyReads} />
      </div>
    )
  }
}

export default BooksApp
