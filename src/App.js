import React from 'react'
import './App.css'
import SearchPage from './pages/SearchPage.js'
import MyReadsPage from './pages/MyReadsPage.js'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/create" component={SearchPage} />
        <Route exact path="/" component={MyReadsPage} />
      </div>
    )
  }
}

export default BooksApp;