import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookDetails extends Component {

    state = {

        booksList: []

    }

    //Update what shelf book is on

    updateShelf = () => {
        const {book, shelf}= this.props
        BooksAPI.update(book, shelf).then((booksList) => {
            this.setState({ booksList })
        })
    }

    //Render book

    render() {
        const { booksList, title, authors, imageLinks, shelf } = this.props

        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193,
                            backgroundImage: "url(" + this.props.imgURL + ")"
                        }}> </div>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                            <div className="book-shelf-category">
                                <booksList shelf = {this.props.updateShelf} />
                            </div>
                        </div>
                    </div>
                    <div className="book-title">{this.props.title}</div>
                    <div className="book-authors">{this.props.authors}</div>
                </div>
                {/*<div className= "bookList-details">*/}
                    {/*<p>{booksList.name}</p>*/}
                    {/*<p>{booksList.author}</p>*/}
                    {/*<p>{booksList.img} </p>*/}
                    {/*<p>{booksList.state}</p>*/}
                {/*</div>*/}
            </div>
        )
    }
}


export default BookDetails