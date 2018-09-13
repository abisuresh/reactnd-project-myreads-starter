import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BookDetails from "./BookDetails";

class ShelfLayout extends Component {

    state =  {
        booksList: [],
        bookShelf: []
    }

    //Render a bookshelf

    render() {
        const booksList = this.props.booksList
        const { title, authors, imageLinks, shelf, id} = this.props
        return (
            <div>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        //Function to filter the books based on what shelf property have
                        //Testing whether the property of the book is the same as the shelf they are on

                        {this.props.booksList.filter((book) => book.shelf === shelf).map((book) => {

                    //Returning an array of books with updated book shelf properties
                    return (<li> <BookDetails
                        // value = {this.state.query.bind}
                        // onChange={(event) => {this.updatingShelfLayout(event.target.value)} }
                        id = {book.id} key = {book.id} imgURL= {book.imageLinks.thumbnail} title= {book.title} authors= {book.authors}
                        shelf={book.shelf}
                    /></li>)

                })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default ShelfLayout