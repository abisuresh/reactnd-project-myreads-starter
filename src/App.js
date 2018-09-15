import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BooksSearch from './BooksSearch'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import BookDetails from './BookDetails'
import ShelfLayout from './ShelfLayout'

class BooksApp extends React.Component {

    //Bind the update function to app object
    constructor(props){
        super(props);
        this.bookStateUpdate = this.bookStateUpdate.bind(this)
    }

    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */

        //Create empty array to hold all of books
        booksList: [],

        //Set initial state for displaying search page
        showSearchPage: false,

    }

    //Adding a life cycle method
    componentDidMount(){
        this.mount = true;
        BooksAPI.getAll().then((booksList) => {
            this.setState({ booksList })
        })
    }

    componentWillUnmount(){
        this.mount = false;
    }

    //function to update an individual book in the state

    bookStateUpdate(id, shelf){
        for(let i=0; i< this.state.booksList.length; i++){
            const book = this.state.booksList[i]
            if(book.id === id){
                const newBookList = this.state.booksList.slice()
                newBookList[i]= Object.assign(book, {shelf: shelf})
                this.setState({booksList: newBookList})
            }
        }
    }

    //render home page
    // Load books on each shelf by using filter to sort which books should be on which shelf and
    // then calling the book details component to render each book
    // Use Route to set homepage to "/" and the search page to "/search"
    // Call books search component within route for /search

    render() {
        return (
            <div>

                <div className="app">
                    <div>
                        <Route exact path="/search" render={() => (
                            <BooksSearch
                                shelfBooks = {this.state.booksList}
                            />
                        )}/>
                        <Route exact path="/" render={() => (
                            <div className="list-books">
                                <div className="list-books-title">
                                    <h1>MyReads</h1>
                                </div>
                                <div className="list-books-content">
                                    <div>
                                        <div className="bookshelf">
                                            <h2 className="bookshelf-title">Currently Reading</h2>
                                            <div>
                                                <div className="bookshelf-books">
                                                    <ol className="books-grid">
                                                        {this.state.booksList.filter((book) => book.shelf === 'currentlyReading').map((book) => {
                                                            return (<li key = {book.id}> <BookDetails
                                                                // value = {this.state.query.bind}
                                                                // onChange={(event) => {this.updatingShelfLayout(event.target.value)} }
                                                                id = {book.id} key = {book.id}
                                                                imageLinks = {book.imageLinks} title= {book.title} authors= {book.authors}
                                                                thumbnail = {book.thumbnail} shelf={book.shelf}

                                                                updateCallback = {this.bookStateUpdate}
                                                            /></li>)
                                                        })}
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bookshelf">
                                            <h2 className="bookshelf-title">Want to Read</h2>
                                            <div>
                                                <div className="bookshelf-books">
                                                    <ol className="books-grid">
                                                        {this.state.booksList.filter((book) => book.shelf === 'wantToRead').map((book) => {

                                                            return (<li key = {book.id}> <BookDetails
                                                                // value = {this.state.query.bind}
                                                                // onChange={(event) => {this.updatingShelfLayout(event.target.value)} }
                                                                id = {book.id} key = {book.id} imageLinks = {book.imageLinks}
                                                                title= {book.title} authors= {book.authors} thumbnail = {book.thumbnail} shelf={book.shelf}

                                                                updateCallback = {this.bookStateUpdate}
                                                            /></li>)

                                                        })}
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bookshelf">
                                            <h2 className="bookshelf-title">Read</h2>
                                            <div>
                                                <div className="bookshelf-books">
                                                    <ol className="books-grid">
                                                        {this.state.booksList.filter((book) => book.shelf === 'read').map((book) => {
                                                            return (<li key = {book.id}> <BookDetails
                                                                // value = {this.state.query.bind}
                                                                // onChange={(event) => {this.updatingShelfLayout(event.target.value)} }
                                                                id = {book.id} key = {book.id} imageLinks = {book.imageLinks}
                                                                title= {book.title} authors= {book.authors} thumbnail = {book.thumbnail}  shelf={book.shelf}

                                                                updateCallback = {this.bookStateUpdate}
                                                            /></li>)
                                                        })}
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        />
                        <div className="open-search">
                            <Link className="open-search" to="/search">Add a book</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BooksApp
