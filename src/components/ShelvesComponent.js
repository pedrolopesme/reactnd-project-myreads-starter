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
                console.log(books)
                this.setState({ books: books });
            })
    }

    render() {
        return (
            <div>
                <ShelfComponent title="Currently Reading" books={this.state.books.filter(book => book.shelf === "currentlyReading" )} />
                <ShelfComponent title="Want to Read" books={this.state.books.filter(book => book.shelf === "wantToRead" )} />
                <ShelfComponent title="Read" books={this.state.books.filter(book => book.shelf === "read" )} />
            </div>
        )
    }
}

export default ShelvesComponent;