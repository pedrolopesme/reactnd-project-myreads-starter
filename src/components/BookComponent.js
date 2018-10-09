import React, { Component } from 'react'
import * as BooksAPI from '../integration/BooksAPI.js'

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
                if(this.state.updateShelves)
                    this.state.updateShelves()
            });
    }

    render() {
        const style = {
            width: 128,
            height: 188,
            backgroundImage: 'url("' + this.state.book.imageLinks.thumbnail + '")'
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={style}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.updateShelf}>
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

export default BookComponent;