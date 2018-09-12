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

    //Function to filter the books based on what shelf they are on
    //Change the property of shelf based on what shelf a book is on
    //Change which books are on the shelf based on the property of shelf they have

    //
    // updatingShelfLayout = () => {
    //     this.state.booksList.filter(this.state.booksList).then((booksList) => {
    //
    //         const {bookShelf} = this.props
    //
    //
    //         //Check if array for currently reading shelf contains all books with currently reading
    //         //Check if array for read shelf contains all books with read
    //         //Check if array for want to read shelf contains all books with want to read
    //         //Move book to appropriate shelf if not
    //
    //         this.setState({ booksList })
    //     })
    // }

    //Function to add a new book (that isn't already on a list) to a list- addBook function

    // addBook = (booksList) => {
    //     this.setState()
    // }
    //
    // //Function to remove book from list (switch to none)- removeBook function
    //
    // removeBook = (booksList) => {
    //     this.setState()
    // }


    //Render a bookshelf

    render() {
        const booksList = this.props.booksList
        const { title, authors, imageLinks, shelf, id} = this.props
        return (
            <div>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.booksList.filter((book) => book.shelf === shelf).map((book) => {

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