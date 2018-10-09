import React, { Component } from 'react'
import ShelfComponent from './ShelfComponent.js'
import * as BooksAPI from '../integration/BooksAPI.js'

class ShelvesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount = () => {
        BooksAPI.getAll()
            .then(books => {
                this.setState({ books: books });
            })
    }

    getBooks = (shelf) => {
        return this.state.books.filter(book => book.shelf === shelf);
    }

    render() {
        return (
            <div>
                <ShelfComponent title="Currently Reading" shelf="currentlyReading" getBooks={this.getBooks} />
                <ShelfComponent title="Want to Read" shelf="wantToRead" getBooks={this.getBooks} />
                <ShelfComponent title="Read" shelf="read" getBooks={this.getBooks} />
            </div>
        )
    }
}

export default ShelvesComponent;