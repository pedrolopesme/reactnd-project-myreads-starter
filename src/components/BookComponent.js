import React, { Component } from 'react'

class BookComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.book.title,
            authors: props.book.authors,
            image: props.book.image,
            height: props.book.height,
            with: props.book.with
        }
    }

    render() {
        const style = { 
            width: this.state.with, 
            height: this.state.height,
            backgroundImage: 'url("' + this.state.image + '")' }

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
                <div className="book-authors">{this.state.authors}</div>
            </div>
        )
    }
}

export default BookComponent;