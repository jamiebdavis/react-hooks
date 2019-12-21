import React, {Component} from 'react';

class BookList extends Component {
    render() {
        return (
            <div className="book-list">
                <ul>
                    <li>The Bible</li>
                    <li>1985</li>
                    <li>Cook Book</li>
                </ul>
            </div>
        );
    }
}

export default BookList;