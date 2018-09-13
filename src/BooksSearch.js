import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BookDetails from "./BookDetails";


class BooksSearch extends Component {

    state = {

        query: '',

        booksList: []

    }

    //Function that searches for books
    findingBook (query) {
        BooksAPI.search(query).then((booksList) => {
            this.setState({ booksList: booksList })
        })
    }

    //Checking if book has thumbnail
    //Adding a placeholder thumbnail if not



    render() {
        const booksList = this.state.booksList
        const testImage = this.state.booksList
        const { title, authors, imageLinks, shelf, id} = this.props
        // testImage(book){
        // BookDetails.filter((book) => book.imageLinks !== imageLinks).map((book) => {
        //     imageLinks = http://via.placeholder.com/128x193?text=?
        // }
        return (
                <div className="search-books">
                    <div className="search-books-bar">
                        {/*<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>*/}
                        <Link className="close-search" to="/" target="_self">Close</Link>
                        {/*onClick={window.location.reload()}*/}
                        <div className="search-books-input-wrapper">
                            {/*
                             NOTES: The search from BooksAPI is limited to a particular set of search terms.
                             You can find these search terms here:
                             https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                             However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                             you don't find a specific author or title. Every search is limited by search terms.
                             */}
                            <input type="text" placeholder="Search by title or author"
                                value = {this.state.query.bind}
                                onChange={(event) => {this.findingBook(event.target.value)} }

                            />

                        </div>
                    </div>
                    <div className="search-books-results">
                        {/*<BookDetails*/}
                            {/*onSearch = {this.findingBook}*/}
                        {/*/>*/}
                        <ol className="books-grid">
                             {/* Creating a function to iterate over each book and
                             render a BookDetails component  */}

                            {this.state.booksList.map((book) => (

                                <BookDetails
                                updateCallback = {() => {}}
                                id = {book.id} key = {book.id} imgURL= {book.imageLinks.thumbnail} title= {book.title} authors= {book.authors}
                                shelf={book.shelf}/>))}

                        </ol>
                    </div>

                </div>
        )
    }
}

export default BooksSearch