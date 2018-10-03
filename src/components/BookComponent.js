import React, { Component } from 'react'

class BookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.book
        }
    }

    render() {
        const style = {
            width: 128,
            height: 188,
            backgroundImage: 'url("' + this.state.imageLinks.thumbnail + '")'
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={style}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.state.title}</div>
                <div className="book-authors">{this.state.authors !== undefined && (this.state.authors.join(", "))}</div>
            </div>
        )
    }
}

export default BookComponent;