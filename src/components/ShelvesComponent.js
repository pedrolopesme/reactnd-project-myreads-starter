import React, { Component } from 'react'
import ShelfComponent from './ShelfComponent.js'

class ShelvesComponent extends Component {
    render() {
        return (
            <div>
                <ShelfComponent title="Currently Reading" />
                <ShelfComponent title="Want to Read" />
                <ShelfComponent title="Read" />
            </div>
        )
    }
}

export default ShelvesComponent;