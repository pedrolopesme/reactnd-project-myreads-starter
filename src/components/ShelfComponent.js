import React, { Component } from 'react'
import BookComponent from './BookComponent'
import PropTypes from 'prop-types'

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

    loadBooks = () => {
        const books = this.state.getBooks(this.state.shelf);
        return books || [];
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.state.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.loadBooks().map(book =>
                            <li key={book.id} className="books-grid-element"><BookComponent book={book} updateShelves={this.state.updateShelves} /> </li>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

ShelfComponent.propTypes = {
    title: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    getBooks: PropTypes.func.isRequired,
    updateShelves: PropTypes.func.isRequired
};

export default ShelfComponent;