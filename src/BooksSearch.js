import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'


class BooksSearch extends Component {
    // static propTypes = {
    //     booksList: PropTypes.array.isRequired
    // }

    state = {

        query: '',

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
    //
    //
    //     }
    // }

    findingBook = () => {
        BooksAPI.search(this.state.query).then((booksList) => {
            this.setState({ booksList })
        })
    }

    render() {
        const { booksList } = this.props
        return (
                <div className="search-books">
                    <div className="search-books-bar">
                        <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                        <div className="search-books-input-wrapper">
                            {/*
                             NOTES: The search from BooksAPI is limited to a particular set of search terms.
                             You can find these search terms here:
                             https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                             However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                             you don't find a specific author or title. Every search is limited by search terms.
                             */}
                            <input type="text" placeholder="Search by title or author"/>

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
        )
    }
}

export default BooksSearch