import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../integration/BooksAPI.js'
import BookComponent from '../components/BookComponent.js'

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            books: []
        }
    }

    handleChange = (evt) => {
        this.setState({
            term: evt.target.value
        })
        this.seachTerm();
    };

    seachTerm = () => {
        BooksAPI.search(this.state.term)
            .then((results) => {
                this.setState({ books: results })
            });
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input className="search-term" type="text" placeholder="Search by title or author" value={this.state.term} onChange={this.seachTerm} />
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.term !== "" && (
                        <span className="searched-term"> Found {this.state.books.length} book results for <i>"{this.state.term}"</i> : </span>
                    )}

                    <ol className="books-grid">
                        {this.state.books.length > 0 && this.state.books.map((book) =>
                            <li key={book.id}> <BookComponent book={book} /> </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;