import React, { Component } from 'react'
import BookComponent from './BookComponent'

class ShelfComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            books: this.props.books
        }
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.state.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            {this.state.books !== undefined && this.state.books.map(book =>
                                <BookComponent book={book} />
                            )}
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default ShelfComponent;