import React, { Component } from 'react'
import ShelvesComponent from '../components/ShelvesComponent.js';
import { Link } from 'react-router-dom'

class MyReadsPage extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <ShelvesComponent />
                </div>
                <div className="open-search">
                    <Link to="/create">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default MyReadsPage;