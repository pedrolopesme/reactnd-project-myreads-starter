import React, { Component } from 'react'
import BookComponent from './BookComponent'

class ShelfComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            shelf: props.shelf,
            getBooks: props.getBooks,
            updateShelves: props.updateShelves
        }
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.state.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.state.getBooks(this.state.shelf).map(book =>
                            <li key={book.id}><BookComponent book={book} updateShelves={this.state.updateShelves} /> </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default ShelfComponent;