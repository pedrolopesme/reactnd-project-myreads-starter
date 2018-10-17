import React, { Component } from 'react'
import * as BooksAPI from '../integration/BooksAPI.js'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'

class BookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: { ...props.book },
            updateShelves: props.updateShelves
        }
    }

    updateShelf = (evnt) => {
        BooksAPI.update(this.state.book, evnt.target.value)
            .then(result => {
                this.state.updateShelves()
            });
    }

    calculateSelectShelf = () => {
        return this.state.book.shelf === undefined ? "none" : this.state.book.shelf;
    }

    render() {
        const style = {
            maxWidth: 128,
            maxHeight: 188
        }

        return (
            <div className="book">
                <div className="book-top">
                    <LazyLoad height={188} once >
                        <img alt={this.state.book.title} className="book-cover" src={this.state.book.imageLinks.thumbnail} style={style} />
                    </LazyLoad>
                    <div className="book-shelf-changer">
                        <select
                            onChange={this.updateShelf}
                            value={this.calculateSelectShelf()}
                            className="move-to-shelf">
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.state.book.title}</div>
                <div className="book-authors">{this.state.book.authors !== undefined && (this.state.book.authors.join(", "))}</div>
            </div>
        )
    }
}

BookComponent.propTypes = {
    book: PropTypes.object.isRequired,
    updateShelves: PropTypes.func.isRequired
};

export default BookComponent;