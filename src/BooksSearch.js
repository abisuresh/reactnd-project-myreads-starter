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

    //Create function to search for books
    // findingBook = () => {
    //     const { booksList } = this.props
    //     // booksList.filter(name => this.booksList.name){
    //
    //     const resultSearch = booksList.find(function(elem){
    //         const result = booksList.str.search(elem)
    //         return result
    //     })
    //
    //     if(resultSearch){
    //     }
    // }

    //Function that searches for books
    findingBook (query) {
        BooksAPI.search(query).then((booksList) => {
            this.setState({ booksList: booksList })
        })
    }

    render() {
        const booksList = this.state.booksList
        return (
                <div className="search-books">
                    <div className="search-books-bar">
                        {/*<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>*/}
                        <Link className="close-search" to="/">Close</Link>
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
                            {this.state.booksList.map( (book) => (<BookDetails
                                key = {book.imageLinks} imgURL= {book.imageLinks.thumbnail} title= {book.title} authors= {book.authors}
                                shelf={book.shelf}/>))}
                        </ol>
                    </div>

                </div>
        )
    }
}

export default BooksSearch