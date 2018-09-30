import React, { Component } from 'react'
import BookComponent from './BookComponent'

class ShelfComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        }
    }

    render() {

        const book = {
            title: "To Kill a Mockingbird",
            authors: "Harper Lee",
            image: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
            height: 193,
            with: 128
        }

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.state.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <BookComponent book={book} />
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default ShelfComponent;